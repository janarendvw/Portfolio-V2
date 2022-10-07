import { useSpring, animated, config } from "@react-spring/three";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useContext, useRef } from "react";
import { bgContext } from "../../App";

type Props = {};

export default function BackgroundObject({}: Props) {
  const rotationContext = useContext(bgContext);
  const { rotate1 } = useSpring({
    rotate1: rotationContext.rotation / 2 ,
    config: config.molasses,
  });
  const { rotate2 } = useSpring({
    rotate2: rotationContext.rotation / 3,
    config: config.molasses,
  });

  return (
    <>
      {/* <fog attach="fog" args={["#000000", 6, 10]} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      <pointLight position={[4, 10, -2]} color={"aqua"} intensity={5} />
      <pointLight position={[0, -10, -6]} color={"cyan"} intensity={3} />
      <animated.mesh 
        rotation-z={rotate1}
        rotation-x={rotate2}
        rotation-y={rotate1}
      >
        <torusKnotGeometry args={[3, 1]} />
        <meshBasicMaterial wireframe/>
        {/* <meshPhysicalMaterial color={"white"} roughness={0.1} metalness={0.3} reflectivity={1} clearcoat={1} vertexColors /> */}
      </animated.mesh>
    </>
  );
}
