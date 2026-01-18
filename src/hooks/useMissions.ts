import { useState, useEffect } from "react";
import { Mission } from "../types/isro";
import { isroApi } from "../services/api";

export const useMissions = () => {
  const [missions, setMissions] = useState<Mission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMissions = async () => {
      try {
        setLoading(true);
        const data = await isroApi.getSpacecrafts();
        // Sort by id (usually typically chronological in this API) or strictly by date if needed
        // Let's reverse it to see the NEWEST launches first
        setMissions(data.reverse());
      } catch (err) {
        setError("Failed to establish comms with ISRO Database.");
      } finally {
        setLoading(false);
      }
    };

    fetchMissions();
  }, []);

  return { missions, loading, error };
};
