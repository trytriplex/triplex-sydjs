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
      <ambientLight intensity={3} />

      {/* Code goes here */}
      <pointLight castShadow intensity={30} />
    </>
  );
}
