import { useState, useEffect } from "react";
import { LOCAL_MISSIONS } from "../data/missions";

export interface Mission {
  id: string;
  name: string;
  date: string;
  vehicle: string;
  outcome: "Success" | "Failure" | "Pending" | "Partial Success";
  orbit: string;
  type: string;
}

export const useIsroData = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate a network delay for the "System Boot" effect
    const loadSystemData = async () => {
      try {
        setLoading(true);

        // Simulating processing time
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Transform the local data into our App's format
        const cleanData: Mission[] = LOCAL_MISSIONS.map((item) => ({
          id: String(item.id),
          name: item.name,
          date: item.launch_date,
          vehicle: item.launch_vehicle,
          outcome: (item.mission_status as Mission["outcome"]) || "Success",
          orbit: item.orbit,
          type: "Scientific",
        }));

        setMissions(cleanData);
      } catch (err) {
        console.error(err);
        setError("Database Corruption Detected.");
      } finally {
        setLoading(false);
      }
    };

    loadSystemData();
  }, []);

  return { missions, loading, error };
};
