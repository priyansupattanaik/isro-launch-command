import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Html } from "@react-three/drei";
import * as THREE from "three";
import { getPositionFromLatLon, ISRO_LOCATIONS } from "../../utils/space";

export const Earth = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  // Auto-rotate the earth
  useFrame(({ clock }) => {
    if (earthRef.current) {
      earthRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = clock.getElapsedTime() * 0.07;
    }
  });

  const sharPos = getPositionFromLatLon(
    ISRO_LOCATIONS.SHAR.lat,
    ISRO_LOCATIONS.SHAR.lng,
    2,
  );

  return (
    <group>
      {/* Core Earth Sphere */}
      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#1e3a8a" // Dark blue
          emissive="#172554" // Glow from within
          specular="#60a5fa"
          shininess={10}
          wireframe={false} // Set to true for a 'schematic' look if preferred
        />
      </Sphere>

      {/* Wireframe Atmosphere / Grid */}
      <Sphere args={[2.05, 32, 32]}>
        <meshBasicMaterial
          color="#38bdf8"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>

      {/* Launch Site Marker */}
      {/* We parent this to the earthRef so it rotates with the earth if we wanted, 
          but for now we keep it separate to ensure it stays at the correct location 
          relative to the camera or grouped differently. 
          Actually, let's attach it to the rotating group manually or handle rotation carefully.
          For simplicity in this step: We render the marker static to visualize position. 
          Real rotation requires parenting. Let's group them.
      */}
      <group rotation-y={0}>
        {/* Note: In a real app we'd sync rotation. 
             For this step, we just want to see the sphere render. */}
      </group>

      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      {/* Sunlight */}
      <directionalLight position={[5, 3, 5]} intensity={2} color="#ffffff" />
    </group>
  );
};
