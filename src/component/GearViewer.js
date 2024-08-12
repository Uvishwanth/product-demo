import React, { Suspense, startTransition, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const GearViewer = () => {
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setModelLoaded(true);
    });
  }, []);

  const { scene } = useGLTF('/warm_gear_box.glb');

  if (!modelLoaded) {
    return <div className="spinner-container">
    <div className="spinner"></div>
  </div>
  
  }

  return (
    <Canvas style={{ height: '80vh', width: '100%' }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={<div></div>}>
        <primitive object={scene} scale={[7, 7, 7]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
};

export default GearViewer;
