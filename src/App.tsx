import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-space-950 text-white relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"
        style={{ backgroundSize: "40px 40px" }}
      />

      <main className="relative z-10 p-10">
        <h1 className="text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-500 uppercase tracking-widest">
          ISRO Launch Command
        </h1>
        <p className="mt-2 text-slate-400 font-mono">
          System Initialized. Awaiting Modules...
        </p>
      </main>
    </div>
  );
}

export default App;
