import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerformanceMonitor } from '@react-three/drei'
import BackgroundObject from './THREE/BackgroundObject'
import round from 'lodash/round'
import {EffectComposer} from '@react-three/postprocessing'

type Props = {}

export default function BackgroundCanvas({}: Props) {
  const [dpr, setDpr] = useState(1)

  return (
    <div
    id="canvas-container"
    className="fixed block top-0 min-h-full -z-10"
  >
    <Canvas performance={{ min: 0.5 }} frameloop='demand' camera={{ position: [0, 0, 24], fov: 90, rotation: [0, 0, 0] }}
    dpr={dpr}
      style={{ width: "100vw", height: "100vh", zIndex: "-1" }}
    >
        <PerformanceMonitor onIncline={() => setDpr(1)} onDecline={() => setDpr(0.5)} >
      <EffectComposer multisampling={0} disableNormalPass={true}>
      </EffectComposer>
     <BackgroundObject/>
     </PerformanceMonitor>
    </Canvas>
  </div>
  )
}