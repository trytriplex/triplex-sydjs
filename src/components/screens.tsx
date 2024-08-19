import { Container, Portal, Root } from "@react-three/uikit";
import { Circle, Ring, SemiCircle } from "./shapes";

export function ShapesBackground() {
  return (
    <>
      <Circle />
      <color args={["#fff"]} attach="background" />
    </>
  );
}

export function TalshoMobileScreen() {
  return (
    <group>
      <Root flexDirection="column">
        <Container
          alignItems="flex-start"
          backgroundColor="white"
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
          <Container flexDirection="column" gap={8}></Container>
        </Container>
      </Root>
    </group>
  );
}
