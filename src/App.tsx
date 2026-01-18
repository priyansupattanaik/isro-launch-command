import React from "react";
import { Scene } from "./components/3d/Scene";

function App() {
  return (
    <div className="min-h-screen bg-space-950 text-white relative overflow-hidden flex flex-col">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"
        style={{ backgroundSize: "40px 40px" }}
      />

      {/* Main Content */}
      <main className="relative z-10 p-8 max-w-7xl mx-auto w-full flex-grow flex flex-col gap-8">
        {/* Header */}
        <header className="flex justify-between items-end border-b border-space-800 pb-6">
          <div>
            <h1 className="text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500 uppercase tracking-widest">
              ISRO Launch Command
            </h1>
            <p className="mt-2 text-slate-400 font-mono text-sm">
              MISSION CONTROL // SYSTEM ONLINE
            </p>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-xs text-space-800 font-mono">USER_ID</div>
            <div className="text-brand-400 font-mono">GUEST_COMMANDER</div>
          </div>
        </header>

        {/* 3D Visualization Area */}
        <section className="w-full">
          <Scene />
        </section>
      </main>
    </div>
  );
}

export default App;
