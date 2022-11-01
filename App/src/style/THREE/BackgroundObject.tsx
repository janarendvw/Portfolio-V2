import { useSpring, animated, config } from "@react-spring/three";
import { OrbitControls, usePerformanceMonitor } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useContext, useEffect, useRef } from "react";
import * as THREE from "three";
import { bgContext } from "../../App";

type Props = {};

export default function BackgroundObject({}: Props) {
  const { invalidate } = useThree();
const geometryRef = useRef<any>(null);
  const vertices:any = [];

for ( let i = 0; i < 100; i ++ ) {

	const x = THREE.MathUtils.randFloatSpread( 10 );
	const y = THREE.MathUtils.randFloatSpread( 10 );
	const z = THREE.MathUtils.randFloatSpread( 30 );

	vertices.push( x, y, z );

}

useEffect(() => {
  geometryRef.current.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );

}, [])

  const rotationContext = useContext(bgContext);
  const { rotate1 } = useSpring({
    rotate1: (rotationContext.rotation) * -10 ,
    config: {tension:8, friction: 8},
    onChange: () => invalidate(),
  });
  const { rotate2 } = useSpring({
    rotate2: rotationContext.rotation / 3,
    config: config.molasses,
    onChange: () => invalidate(),
  });

  return (
    <>
      <fog attach="fog" args={["#000000", 12, 17]} />
      <animated.points 
        position-z={rotate1}
      >  
      <bufferGeometry attach="geometry" ref={geometryRef}/>
      <pointsMaterial size={0.03} sizeAttenuation color={'#fff'} transparent/>
      </animated.points>
    </>
  );
}
