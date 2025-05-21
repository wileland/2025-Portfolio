// File: /client/src/game/GameApp.jsx

import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Player() {
  const meshRef = useRef();
  const [position, setPosition] = useState([0, 0.5, 0]);
  const speed = 0.1;

  useFrame(() => {
    const keys = window.__gameKeys || {};
    let [x, y, z] = position;

    if (keys['ArrowUp'] || keys['w']) z -= speed;
    if (keys['ArrowDown'] || keys['s']) z += speed;
    if (keys['ArrowLeft'] || keys['a']) x -= speed;
    if (keys['ArrowRight'] || keys['d']) x += speed;

    const newPos = [x, y, z];
    setPosition(newPos);
    meshRef.current.position.set(...newPos);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={'hotpink'} />
    </mesh>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  );
}

function LightSetup() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
    </>
  );
}

function GameApp() {
  // Keyboard input tracking
  React.useEffect(() => {
    const down = (e) => (window.__gameKeys = { ...window.__gameKeys, [e.key]: true });
    const up = (e) => (window.__gameKeys = { ...window.__gameKeys, [e.key]: false });
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-black">
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <Stars radius={50} depth={50} count={5000} factor={4} fade />
          <LightSetup />
          <Ground />
          <Player />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default GameApp;
