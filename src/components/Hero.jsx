import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Geometry, Base, Subtraction } from '@react-three/csg';
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";
import { Bloom, N8AO, SMAA, EffectComposer } from '@react-three/postprocessing';
import { KernelSize } from "postprocessing";

function Shape() {
  const meshRef = useRef();
  const innerSphereRef = useRef();

  useFrame((state, delta) => {
    // ONLY CONSTANT ROTATION - No mouse influence
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
    
    if (innerSphereRef.current) {
      innerSphereRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <meshPhysicalMaterial 
          roughness={0.1}
          metalness={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          color="#050505"
        />
        <Geometry>
          <Base>
            <primitive object={new RoundedBoxGeometry(1.6, 1.6, 1.6, 10, 0.08)} />
          </Base>
          <Subtraction>
            <boxGeometry args={[3, 0.9, 0.9]} />
          </Subtraction>
          <Subtraction rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[3, 0.9, 0.9]} />
          </Subtraction>
          <Subtraction rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[3, 0.9, 0.9]} />
          </Subtraction>
        </Geometry>
      </mesh>
      
      <mesh ref={innerSphereRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhysicalMaterial 
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={3}
        />
      </mesh>
    </>
  );
}

const Scene = () => {
  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [5, 5, 5], fov: 35 }}
      dpr={[1, 2]}
    >
      <color attach="background" args={["#050505"]} />
      <directionalLight position={[-5, 5, -5]} intensity={0.5} color="#e6f3ff" />
      <directionalLight position={[0, -5, 10]} intensity={1} color="#fff5e6" />
      <ambientLight intensity={0.2} />
      <Shape />
      <EffectComposer multisampling={0}>
        <N8AO halfRes color="black" aoRadius={2} intensity={1} />
        <Bloom kernelSize={KernelSize.LARGE} luminanceThreshold={0.8} intensity={1.5} />
        <SMAA />
      </EffectComposer>
    </Canvas>
  );
};

export const Hero = () => {
  return (
    <div className="h-screen w-full relative bg-[#050505] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Fade Transition Layer */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-10 pointer-events-none" />

      {/* Hero Content */}
     <div className="absolute bottom-20 left-12 md:left-24 z-20 max-w-3xl">
     <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 text-white uppercase leading-[0.9]">
      Xanin Kaizo<br />
      <span className="text-white/20">Interfaces in Motion</span>
       </h1>
  
       <div className="h-[1px] w-24 bg-white/20 my-10" />
  
       <p className="font-mono text-sm md:text-lg leading-relaxed text-white/50 tracking-tight max-w-2xl uppercase">
       A learning-driven exploration of UI systems, animation, and visual balance — 
       built through practice, iteration, and curiosity.
       </p>
      </div>

    </div>
  );
}