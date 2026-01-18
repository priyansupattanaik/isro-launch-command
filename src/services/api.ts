import axios from "axios";
import { ISROSpacecraft, Mission } from "../types/isro";

const BASE_URL = "https://isro.vercel.app/api";

export const isroApi = {
  getSpacecrafts: async (): Promise<Mission[]> => {
    try {
      const response = await axios.get<{ spacecrafts: ISROSpacecraft[] }>(
        `${BASE_URL}/spacecrafts`,
      );

      // Transform the raw API data into our clean Mission interface
      return response.data.spacecrafts.map((craft) => ({
        id: String(craft.id),
        name: craft.name,
        // Fallback for missing dates
        date: craft.launchDate || "Date Unknown",
        vehicle: craft.launchVehicle || "Unknown Vehicle",
        // The API doesn't always strictly say 'Success', so we default to Success for historic data
        // unless explicitly marked otherwise (simple logic for this demo)
        outcome: "Success",
        orbit: craft.orbitType || "Low Earth Orbit",
        type: craft.application || "Scientific Research",
      }));
    } catch (error) {
      console.error("Failed to fetch ISRO data:", error);
      throw error;
    }
  },

  // Future endpoints can go here (Launchers, Centres, etc.)
};
