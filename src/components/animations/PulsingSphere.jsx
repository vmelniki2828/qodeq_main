import React, { useRef, useEffect } from 'react';

const PulsingSphere = ({ scrollProgress = 0 }) => {
  const isDark = scrollProgress < 0.5;
  const opacity = Math.max(0.3, 1 - scrollProgress * 0.7);
  const canvasRef = useRef(null);
  const startTime = useRef(Date.now());
  const mousePosition = useRef({ x: 0, y: 0 });
  const isHovering = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const points = [];
    const numPoints = 400;
    const radius = 240;
    const rotationSpeed = 0.001;
    let rotation = 0;

    // Handle mouse events
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleMouseEnter = () => {
      isHovering.current = true;
    };

    const handleMouseLeave = () => {
      isHovering.current = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

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
        baseX: radius * Math.sin(phi) * Math.cos(theta),
        baseY: radius * Math.sin(phi) * Math.sin(theta),
        baseZ: radius * Math.cos(phi),
        size: 2,
        delay: Math.random() * 2000,
        assembleSpeed: Math.random() * 0.002 + 0.001,
        pulseOffset: Math.random() * Math.PI * 2,
        assembled: false,
        velocity: { x: 0, y: 0, z: 0 }
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
            x: point.baseX,
            y: point.baseY,
            z: point.baseZ
          };

          if (point.assembled) {
            const pulseFactor = 1 + globalPulse + Math.sin(elapsedTime * 0.002 + point.pulseOffset) * 0.1;
            targetWithPulse.x *= pulseFactor;
            targetWithPulse.y *= pulseFactor;
            targetWithPulse.z *= pulseFactor;

            // Apply cursor interaction when hovering
            if (isHovering.current) {
              const cosR = Math.cos(rotation);
              const sinR = Math.sin(rotation);
              const x = targetWithPulse.x * cosR - targetWithPulse.z * sinR;
              const z = targetWithPulse.z * cosR + targetWithPulse.x * sinR;
              const scale = 1000 / (1000 + z);
              const x2d = canvas.width/2 + x * scale;
              const y2d = canvas.height/2 + targetWithPulse.y * scale;

              // Calculate distance from cursor
              const dx = x2d - mousePosition.current.x;
              const dy = y2d - mousePosition.current.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              const repelRadius = 120; // Increased radius of cursor influence

              if (distance < repelRadius) {
                const force = (1 - distance / repelRadius) * 30;
                const angle = Math.atan2(dy, dx);
                
                // Apply repulsion force with increased strength
                point.velocity.x += Math.cos(angle) * force * 0.25;
                point.velocity.y += Math.sin(angle) * force * 0.25;
              }
            }

            // Apply velocity with damping
            targetWithPulse.x += point.velocity.x;
            targetWithPulse.y += point.velocity.y;

            // Limit maximum displacement
            const maxDisplacement = radius * 0.4; // 40% от радиуса сферы
            const dx = targetWithPulse.x - point.baseX;
            const dy = targetWithPulse.y - point.baseY;
            const displacement = Math.sqrt(dx * dx + dy * dy);
            
            if (displacement > maxDisplacement) {
              const scale = maxDisplacement / displacement;
              targetWithPulse.x = point.baseX + dx * scale;
              targetWithPulse.y = point.baseY + dy * scale;
            }

            // Stronger damping
            point.velocity.x *= 0.9;
            point.velocity.y *= 0.9;
          }

          // Smoother transition back to original position
          point.currentX += (targetWithPulse.x - point.currentX) * (isHovering.current ? 0.1 : 0.05);
          point.currentY += (targetWithPulse.y - point.currentY) * (isHovering.current ? 0.1 : 0.05);
          point.currentZ += (targetWithPulse.z - point.currentZ) * (isHovering.current ? 0.1 : 0.05);          const cosR = Math.cos(rotation);
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

    // Cleanup event listeners
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDark]);

  return (
    <div style={{
      position: 'absolute',
      right: 140,
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 2,
      width: 640,
      height: 640,
      opacity: opacity,
      transition: 'opacity 0.3s ease'
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
