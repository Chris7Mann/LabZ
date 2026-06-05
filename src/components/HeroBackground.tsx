// @ts-nocheck
'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function Scene() {
  useFrame((state) => {
    // Usiamo il mouse di stato (che R3F calcola automaticamente)
    // Se non si muove, è perché l'evento non arriva al Canvas
    const { mouse } = state;
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 2, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 2, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return <Sparkles count={1500} scale={15} size={3} speed={0.2} opacity={0.5} color="#10b981" />;
}

export default function HeroBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-zinc-950 pointer-events-none">
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 10] }}
          // Impostiamo eventi globali per ignorare il DOM sovrastante
          eventSource={typeof document !== 'undefined' ? document.body : undefined}
          eventPrefix="client"
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}
