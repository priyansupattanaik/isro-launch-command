import React from "react";
import { motion } from "framer-motion";
import { Rocket, Calendar, Globe, Activity } from "lucide-react";
import { Mission } from "../../hooks/useIsroData";

interface TimelineItemProps {
  mission: Mission;
  index: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  mission,
  index,
}) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex items-center justify-between w-full mb-8 ${isEven ? "flex-row-reverse" : "flex-row"}`}
    >
      {/* Empty space for alignment */}
      <div className="w-5/12" />

      {/* Center Line Node */}
      <div className="w-2/12 flex justify-center relative">
        <div className="h-full w-0.5 bg-space-800 absolute top-0 bottom-0 -z-10" />
        <div
          className={`w-4 h-4 rounded-full border-2 z-10 ${
            mission.outcome === "Success"
              ? "bg-green-500 border-green-900 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
              : mission.outcome === "Failure"
                ? "bg-red-500 border-red-900 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                : "bg-brand-500 border-brand-900 shadow-[0_0_10px_rgba(14,165,233,0.5)]"
          }`}
        />
      </div>

      {/* Mission Card */}
      <div className="w-5/12">
        <div className="bg-space-900/40 backdrop-blur-md border border-space-800 p-5 rounded-xl hover:border-brand-500/50 transition-colors group">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
              {mission.name}
            </h3>
            <span
              className={`text-xs font-mono px-2 py-1 rounded ${
                mission.outcome === "Success"
                  ? "bg-green-500/10 text-green-400"
                  : mission.outcome === "Failure"
                    ? "bg-red-500/10 text-red-400"
                    : "bg-brand-500/10 text-brand-400"
              }`}
            >
              {mission.outcome.toUpperCase()}
            </span>
          </div>

          <div className="space-y-2 text-sm text-slate-400 font-mono mt-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-brand-500" />
              <span>{mission.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-purple-500" />
              <span>{mission.vehicle}</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-blue-500" />
              <span>{mission.orbit}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
