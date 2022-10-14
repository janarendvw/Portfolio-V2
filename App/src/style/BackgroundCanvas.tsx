import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerformanceMonitor } from '@react-three/drei'
import BackgroundObject from './THREE/BackgroundObject'
import { Bloom, EffectComposer, Glitch, DepthOfField, Scanline, ShockWave, Pixelation, Grid, SSAO } from '@react-three/postprocessing'
import { ChromaticAberration } from '@react-three/postprocessing'
import { Noise } from '@react-three/postprocessing'
import { GodRays } from '@react-three/postprocessing'
import { Vector2 } from 'three'
type Props = {}

export default function BackgroundCanvas({}: Props) {
  const [dpr, setDpr] = useState(1)

  return (
    <div
    id="canvas-container"
    className="fixed block top-0 min-h-full -z-10"
  >
    <Canvas camera={{ position: [0, 0, 24], fov: 90, rotation: [0, 0, 0] }}
    performance={{ min: 0.5 }}
      style={{ width: "100vw", height: "100vh", zIndex: "-1" }}
    >
        <PerformanceMonitor onChange={({ factor }) => setDpr(Math.round(0.5 + 1.5 * factor))}/>
      <EffectComposer multisampling={0} disableNormalPass={true}>
      </EffectComposer>
     <BackgroundObject/>
    </Canvas>
  </div>
  )
}