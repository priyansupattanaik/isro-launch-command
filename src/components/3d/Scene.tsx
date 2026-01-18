import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Earth } from "./Earth";

export const Scene = () => {
  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden border border-space-800 bg-space-900/50 shadow-2xl backdrop-blur-sm relative">
      {/* Overlay UI Header */}
      <div className="absolute top-4 left-4 z-10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
            Live Telemetry
          </span>
        </div>
        <h2 className="text-xl font-bold text-white mt-1">Global Tracking</h2>
      </div>

      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={["#0b0c15"]} />

        {/* Interactive Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />

        {/* Space Environment */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* The Earth Model */}
        <Earth />
      </Canvas>
    </div>
  );
};
