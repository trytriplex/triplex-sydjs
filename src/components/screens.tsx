import { Container, Portal, Root, Text } from "@react-three/uikit";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { MathUtils, MeshStandardMaterial } from "three";
import { useState } from "react";
import { Circle, Ring, SemiCircle } from "./shapes";
import * as p from "../palette";

export function ShapesBackground() {
  return (
    <>
      <PerspectiveCamera makeDefault manual position={[0, 0, 5]} />
      <pointLight intensity={50} />
      <spotLight castShadow intensity={30} position={[-1, 1, 3]} />
      <ambientLight intensity={4} />

      {/* Code goes here */}
      <Circle size={0.3} />
    </>
  );
}

export function TalshoMobileScreen() {
  return (
    <group>
      <Root flexDirection="column">
        <Container
          alignItems="flex-start"
          backgroundColor={p.surface.default}
          borderRadius={20}
          castShadow
          flexDirection="column"
          height={210}
          paddingX={10}
          paddingY={20}
          receiveShadow
          width={100}
        >
          <Portal
            borderTopRadius={20}
            dpr={20}
            height={121}
            marginTop={-20}
            marginX={-10}
            transformTranslateZ={0.1}
            width={100}
          >
            <ShapesBackground />
          </Portal>

          <Container flexDirection="column" gap={8}>
            {/* Code goes here */}
          </Container>
        </Container>
      </Root>
    </group>
  );
}
