import { PerspectiveCamera, Gltf } from "@react-three/drei";
import { Circle } from "./components/shapes";
import { TalshoMobileScreen } from "./components/screens";

export function UIScene() {
  return (
    <>
      <Gltf
        castShadow
        position={[1.02, 1.54, -1.72]}
        receiveShadow
        rotation={[0, -0.296_705_972_839_036_05, 0]}
        scale={[0.48, 0.48, 0.48]}
        src="/assets/pmndrs.glb"
      />
      <TalshoMobileScreen />
      <PerspectiveCamera
        makeDefault
        position={[0, 0.5, 2.5]}
        rotation={[-0.15707963267948977, 0, 0]}
      />
      <ambientLight intensity={3} />
      <pointLight castShadow intensity={30} position={[2.92, 0.82, -2.74]} />
      <pointLight castShadow intensity={30} position={[-1.96, 0.82, -2.26]} />
      <pointLight castShadow intensity={30} position={[-1.56, 0.62, 1.4]} />
      <Circle color="pink" position={[0.84, 0, -0.14]} size={0.07} />
      <Circle color="pink" position={[1.1, 0.22, -0.1]} size={0.05} />
      <Circle color="pink" position={[-1, -0.22, -0.28]} size={0.08} />
      <Circle color="pink" position={[-1.1, -0.08, -0.32]} size={0.05} />
      <Circle color="pink" position={[0, -2.08, -2.2]} size={1.5} />
      <Circle color="pink" position={[0, -2.08, -29.68]} size={25} />
    </>
  );
}
