export interface ISROSpacecraft {
  id: number;
  name: string;
  launchDate?: string; // API might return inconsistent dates, so we handle optionality
  launchVehicle?: string;
  orbitType?: string;
  application?: string;
  link?: string;
  missionStatus?: string;
}

// The clean, normalized structure our UI will actually use
export interface Mission {
  id: string;
  name: string;
  date: string;
  vehicle: string;
  outcome: "Success" | "Failure" | "Pending"; // We will infer this
  orbit: string;
  type: string; // Communication, Earth Observation, etc.
}
