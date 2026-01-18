import * as THREE from "three";

/**
 * Converts specific Earth coordinates to a 3D Vector position
 * @param lat Latitude (degrees)
 * @param lng Longitude (degrees)
 * @param radius Sphere radius (default 1 for standard unit sphere)
 */
export const getPositionFromLatLon = (
  lat: number,
  lng: number,
  radius: number = 2,
): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
};

// ISRO Launch Center (SHAR) Coordinates
export const ISRO_LOCATIONS = {
  SHAR: { lat: 13.7198, lng: 80.2304, name: "Satish Dhawan Space Centre" },
  HQ: { lat: 12.9716, lng: 77.5946, name: "ISRO HQ (Bengaluru)" },
};
