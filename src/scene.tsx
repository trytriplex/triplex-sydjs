import { PerspectiveCamera } from "@react-three/drei";
import { Circle, Ring, SemiCircle } from "./components/shapes";
import { TalshoMobileScreen } from "./components/screens";

export function UIScene() {
  return (
    <>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial />
      </mesh>
      <PerspectiveCamera position={[0, 0, 2.22]} />
    </>
  );
}
