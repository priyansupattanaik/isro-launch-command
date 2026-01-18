import React from "react";
import { Scene } from "./components/3d/Scene";
import { useMissions } from "./hooks/useMissions";

function App() {
  const { missions, loading, error } = useMissions();

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

        {/* TEMPORARY DATA VERIFICATION PANEL */}
        <section className="border border-space-800 bg-space-900/50 rounded-xl p-6 backdrop-blur-sm">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-brand-500 rounded-full" />
            Mission Registry Uplink
          </h2>

          {loading && (
            <p className="text-brand-400 font-mono animate-pulse">
              Receiving Telemetry...
            </p>
          )}

          {error && (
            <p className="text-red-500 font-mono">!! SIGNAL LOST: {error}</p>
          )}

          {!loading && !error && (
            <div className="h-64 overflow-y-auto font-mono text-sm space-y-2 pr-2">
              {missions.slice(0, 10).map((mission) => (
                <div
                  key={mission.id}
                  className="flex justify-between p-2 hover:bg-space-800 rounded border-b border-space-800/50"
                >
                  <span className="text-white font-bold">{mission.name}</span>
                  <span className="text-slate-400">{mission.date}</span>
                  <span className="text-brand-400">{mission.vehicle}</span>
                </div>
              ))}
              <div className="text-center text-slate-500 pt-2">
                ... {missions.length - 10} more records loaded
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
