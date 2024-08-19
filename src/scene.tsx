import { PerspectiveCamera, Gltf } from "@react-three/drei";
import { Circle, Ring, SemiCircle } from "./components/shapes";
import { TalshoMobileScreen } from "./components/screens";

export function UIScene() {
  return (
    <>
      <Gltf src="/public/assets/pmndrs.glb" />
      <PerspectiveCamera position={[0, 0, 2.22]} />
    </>
  );
}
