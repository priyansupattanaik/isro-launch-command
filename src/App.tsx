import React from "react";
import { Scene } from "./components/3d/Scene";
import { Timeline } from "./components/dashboard/Timeline";
import { useIsroData } from "./hooks/useIsroData";

function App() {
  const { missions, loading, error } = useIsroData();

  return (
    <div className="min-h-screen bg-space-950 text-white relative overflow-hidden flex flex-col">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"
        style={{ backgroundSize: "40px 40px" }}
      />

      <main className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto w-full flex-grow flex flex-col gap-12">
        {/* Header */}
        <header className="flex justify-between items-end border-b border-space-800 pb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500 uppercase tracking-widest">
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

        {/* TIMELINE SECTION */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-space-800 flex-grow" />
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="text-brand-400">///</span> MISSION ARCHIVE
            </h2>
            <div className="h-px bg-space-800 flex-grow" />
          </div>

          {loading && (
            <div className="text-center py-20 text-brand-400 font-mono animate-pulse">
              INITIALIZING ARCHIVE DATABANKS...
            </div>
          )}

          {error && (
            <div className="text-center py-20 text-red-500 font-mono border border-red-900/50 bg-red-900/10 rounded">
              !! CRITICAL ERROR: {error}
            </div>
          )}

          {!loading && !error && <Timeline missions={missions} />}
        </section>
      </main>
    </div>
  );
}

export default App;
