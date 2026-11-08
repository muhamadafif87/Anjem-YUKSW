export const PRICE_PER_KM = 2500;
export const BASE_FEE = 1000;

// jarak (meter) -> km dibulatkan ke atas
export const roundedKm = (meters: number) => Math.ceil(meters / 1000 - 1e-9);

// ((jarak dibulatkan ke atas) * 2.500) + 1.000
export const estimateFee = (km: number) => km * PRICE_PER_KM + BASE_FEE;

export const formatRupiah = (n: number) =>
  `Rp ${new Intl.NumberFormat("id-ID").format(n)}`;