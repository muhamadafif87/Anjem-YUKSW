export type LatLng = { lat: number; lng: number };
export type Place = LatLng & { label: string };

// Titik awal peta, perkiraan sekitar UKSW Salatiga. Sesuaikan jika perlu.
export const DEFAULT_CENTER: LatLng = { lat: -7.3326, lng: 110.5083 };