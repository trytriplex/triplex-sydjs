import { Float } from "@react-three/drei";
import { type Vector3Tuple } from "three";
import * as p from "../palette";

export function Circle({
  color = "pink",
  position,
  size,
}: {
  color?: p.AccentPalette;
  position?: Vector3Tuple;
  size?: number;
}) {
  return (
    <mesh castShadow position={position} receiveShadow>
      <sphereGeometry args={[size, 30, 30]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export function SemiCircle({
  color = "pink",
  position,
  rotation,
  size,
}: {
  color?: p.AccentPalette;
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
  size?: number;
}) {
  return (
    <mesh castShadow position={position} receiveShadow rotation={rotation}>
      <sphereGeometry args={[size, 30, 30, 0, Math.PI * 2, 0, Math.PI / 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export function Ring({
  color = "purple",
  position,
  rotation,
}: {
  color?: p.AccentPalette;
  position?: Vector3Tuple;
  rotation?: Vector3Tuple;
}) {
  return (
    <mesh castShadow rotation={rotation} position={position} receiveShadow>
      <ringGeometry args={[1.27, 1.3, 60]} />
      <meshStandardMaterial
        color={color}
        emissive="#fff"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
}
