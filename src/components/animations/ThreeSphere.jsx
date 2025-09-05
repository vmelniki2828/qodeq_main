import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';

// Компонент анимированной сферы с точками
function AnimatedSphere({ scrollProgress }) {
  const sphereRef = useRef();
  const pointsRef = useRef();
  const groupRef = useRef();

  // Создаем геометрию с точками на сфере
  const points = React.useMemo(() => {
    const pointsArray = [];
    const radius = 2;
    const pointCount = 500;

    for (let i = 0; i < pointCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      pointsArray.push(x, y, z);
    }
    
    return new Float32Array(pointsArray);
  }, []);

  // Анимация на каждом кадре
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
      groupRef.current.rotation.x += delta * 0.1;
    }
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.3;
      pointsRef.current.rotation.x += delta * 0.15;
    }

    // Эффект дыхания
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    if (sphereRef.current) {
      sphereRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group ref={groupRef}>
      {/* Основная сфера с wireframe */}
      <Sphere ref={sphereRef} args={[2, 32, 32]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#ffffff" 
          wireframe 
          transparent 
          opacity={0.3}
        />
      </Sphere>
      
      {/* Точки на поверхности сферы */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.length / 3}
            array={points}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#ffffff"
          size={0.05}
          transparent
          opacity={0.8}
        />
      </points>
      
      {/* Внутренняя светящаяся сфера */}
      <Sphere args={[1.8, 16, 16]} position={[0, 0, 0]}>
        <meshBasicMaterial 
          color="#4f9eff" 
          transparent 
          opacity={0.1}
        />
      </Sphere>
    </group>
  );
}

// Главный компонент 3D сферы
export default function ThreeSphere({ scrollProgress }) {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.3} />
        <AnimatedSphere scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
}
