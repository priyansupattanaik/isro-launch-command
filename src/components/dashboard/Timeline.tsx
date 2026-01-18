import React from "react";
import { TimelineItem } from "./TimelineItem";
import { Mission } from "../../hooks/useIsroData";

interface TimelineProps {
  missions: Mission[];
}

export const Timeline: React.FC<TimelineProps> = ({ missions }) => {
  return (
    <div className="relative w-full py-10">
      {/* Central Guide Line (Background) */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-space-800 to-transparent" />

      <div className="flex flex-col w-full max-w-5xl mx-auto">
        {missions.map((mission, index) => (
          <TimelineItem key={mission.id} mission={mission} index={index} />
        ))}
      </div>

      {/* Bottom decorative fading element */}
      <div className="text-center mt-10">
        <div className="inline-block px-4 py-2 bg-space-900 border border-space-800 rounded-full text-xs font-mono text-slate-500">
          END OF TRANSMISSION LOG
        </div>
      </div>
    </div>
  );
};
