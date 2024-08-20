import { Container, Portal, Root, Text } from "@react-three/uikit";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { PerspectiveCamera } from "@react-three/drei";
import { MathUtils, MeshStandardMaterial } from "three";
import { useState } from "react";
import { Circle, Ring, SemiCircle } from "./shapes";
import * as p from "../palette";

export function ShapesBackground({ isEnabled }: { isEnabled?: boolean }) {
  return (
    <>
      <Physics paused={!isEnabled}>
        <CuboidCollider args={[10, 0.5, 10]} position={[0, -3, 0]} />
        <CuboidCollider args={[0.5, 10, 10]} position={[-5, -3, 0]} />
        <CuboidCollider args={[0.5, 10, 10]} position={[5, -3, 0]} />
        <CuboidCollider args={[10, 10, 0.5]} position={[0, -3, -5]} />
        <CuboidCollider args={[10, 10, 0.5]} position={[0, -3, 5]} />
        <color args={[p.surface.default]} attach="background" />
        <PerspectiveCamera makeDefault manual position={[0, 0, 5]} />
        <RigidBody colliders={"ball"} position={[1.4, 1.4, 0]} restitution={1}>
          <Circle color="pink" size={1.6} />
        </RigidBody>
        <RigidBody colliders={"ball"} position={[-1.3, 1.4, 0]} restitution={1}>
          <Circle color="purple" size={0.3} />
        </RigidBody>
        <Ring position={[-1.5, 1.4, 0]} />
        <RigidBody
          colliders={"hull"}
          position={[-0.8, -0.8, 0]}
          restitution={1}
          rotation={[-0.2, 0.1, 2.6]}
        >
          <SemiCircle color="pink" size={0.7} />
        </RigidBody>
        <RigidBody
          colliders={"hull"}
          position={[-0.3, -0.1, 0]}
          restitution={1}
          rotation={[MathUtils.degToRad(-2), 0, MathUtils.degToRad(180)]}
        >
          <SemiCircle color="purple" size={0.5} />
        </RigidBody>
        <pointLight intensity={50} position={[3.76, 2.92, 3.56]} />
        <pointLight intensity={50} position={[-3.88, -0.7, 3.24]} />
        <spotLight castShadow intensity={30} position={[-1, 1, 3]} />
        <ambientLight intensity={4} />
      </Physics>
    </>
  );
}

export function TalshoMobileScreen() {
  const [active, setActive] = useState(false);

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
            <ShapesBackground isEnabled={active} />
          </Portal>

          <Container flexDirection="column" gap={8}>
            <Text
              color={p.foreground.default}
              fontSize={8}
              fontWeight="semi-bold"
              panelMaterialClass={MeshStandardMaterial}
              transformTranslateZ={3}
              width={60}
            >
              Welcome To Talsho
            </Text>
            <Text
              color={p.foreground.default}
              fontSize={4}
              fontWeight="medium"
              panelMaterialClass={MeshStandardMaterial}
              transformTranslateZ={3}
            >
              This is the place for you to showcase your talents & win exciting
              rewards
            </Text>
            <Container gap={1.5} transformTranslateZ={3}>
              <Container
                backgroundColor={p.accent.pink}
                borderRadius={9999}
                flexDirection="column"
                paddingX={3}
                paddingY={0.75}
              />
              <Container
                backgroundColor={p.accent.pink}
                borderRadius={9999}
                flexDirection="column"
                paddingX={0.75}
                paddingY={0.75}
              />
              <Container
                backgroundColor={p.accent.pink}
                borderRadius={9999}
                flexDirection="column"
                paddingX={0.75}
                paddingY={0.75}
              />
            </Container>
            <Container
              active={{ backgroundOpacity: 0.8 }}
              alignSelf="flex-start"
              backgroundColor={p.surface.interactive}
              borderRadius={9999}
              castShadow
              flexDirection="column"
              gap={6}
              hover={{ backgroundOpacity: 0.9 }}
              onClick={() => setActive(true)}
              paddingX={11}
              paddingY={5}
              panelMaterialClass={MeshStandardMaterial}
              transformTranslateZ={3}
            >
              <Text color={p.foreground.inverse} fontSize={4} fontWeight="bold">
                Get started
              </Text>
            </Container>
          </Container>
        </Container>
      </Root>
    </group>
  );
}
