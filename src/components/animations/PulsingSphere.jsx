import React, { useRef, useEffect } from 'react';

const PulsingSphere = ({ scrollProgress = 0 }) => {
  const isDark = scrollProgress < 0.5;
  const opacity = Math.max(0.3, 1 - scrollProgress * 0.7);
  const canvasRef = useRef(null);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const points = [];
    const numPoints = 400;
    const radius = 240;
    const rotationSpeed = 0.001;
    let rotation = 0;

    // Create sphere points
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      
      points.push({
        targetX: radius * Math.sin(phi) * Math.cos(theta),
        targetY: radius * Math.sin(phi) * Math.sin(theta),
        targetZ: radius * Math.cos(phi),
        currentX: 0,
        currentY: 0,
        currentZ: 0,
        size: 2,
        delay: Math.random() * 2000,
        assembleSpeed: Math.random() * 0.002 + 0.001,
        pulseOffset: Math.random() * Math.PI * 2,
        assembled: false
      });
    }

    function render() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime.current;
      const globalPulse = Math.sin(elapsedTime * 0.001) * 0.15;

      points.forEach(point => {
        if (elapsedTime > point.delay) {
          const assembleProgress = Math.min(1, (elapsedTime - point.delay) * point.assembleSpeed);
          
          if (assembleProgress >= 1) {
            point.assembled = true;
          }

          let targetWithPulse = {
            x: point.targetX,
            y: point.targetY,
            z: point.targetZ
          };

          if (point.assembled) {
            const pulseFactor = 1 + globalPulse + Math.sin(elapsedTime * 0.002 + point.pulseOffset) * 0.1;
            targetWithPulse.x *= pulseFactor;
            targetWithPulse.y *= pulseFactor;
            targetWithPulse.z *= pulseFactor;
          }

          point.currentX += (targetWithPulse.x - point.currentX) * 0.05;
          point.currentY += (targetWithPulse.y - point.currentY) * 0.05;
          point.currentZ += (targetWithPulse.z - point.currentZ) * 0.05;

          const cosR = Math.cos(rotation);
          const sinR = Math.sin(rotation);
          const x = point.currentX * cosR - point.currentZ * sinR;
          const z = point.currentZ * cosR + point.currentX * sinR;
          
          const scale = 1000 / (1000 + z);
          const x2d = canvas.width/2 + x * scale;
          const y2d = canvas.height/2 + point.currentY * scale;

          const alpha = point.assembled ? 1 : assembleProgress;
          
          ctx.beginPath();
          ctx.arc(x2d, y2d, point.size * scale, 0, Math.PI * 2);
          ctx.fillStyle = isDark ? 
            `rgba(255,255,255,${alpha})` : 
            `rgba(0,0,0,${alpha})`;
          ctx.fill();
        }
      });

      rotation += rotationSpeed;
      requestAnimationFrame(render);
    }

    canvas.width = 640;
    canvas.height = 640;
    render();
  }, [isDark]);

  return (
    <div style={{
      position: 'absolute',
      right: 80,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      width: 640,
      height: 640,
      opacity: opacity,
      transition: 'opacity 0.3s ease',
      pointerEvents: 'none'
    }}>
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
}

export default PulsingSphere;
