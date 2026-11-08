import { NextRequest, NextResponse } from "next/server";

const ORS_URL = "https://api.openrouteservice.org/v2/directions/driving-car";

type Point = { lat: number; lng: number };
const isPoint = (p: unknown): p is Point =>
  typeof p === "object" &&
  p !== null &&
  Number.isFinite((p as Point).lat) &&
  Number.isFinite((p as Point).lng);

export async function POST(req: NextRequest) {
  const key = process.env.ORS_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "ORS_API_KEY belum diatur" }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  if (!isPoint(body?.from) || !isPoint(body?.to)) {
    return NextResponse.json({ error: "Titik tidak valid" }, { status: 400 });
  }

  const res = await fetch(ORS_URL, {
    method: "POST",
    headers: { Authorization: key, "Content-Type": "application/json" },
    body: JSON.stringify({
      coordinates: [
        [body.from.lng, body.from.lat],
        [body.to.lng, body.to.lat],
      ],
    }),
    cache: "no-store",
  });

  if (res.status === 404) {
    return NextResponse.json(
      { error: "Titik terlalu jauh dari jalan, pilih titik lain." },
      { status: 422 },
    );
  }
  if (!res.ok) {
    return NextResponse.json({ error: "Gagal menghitung rute." }, { status: 502 });
  }

  const data = await res.json();
  const meters = data?.routes?.[0]?.summary?.distance;
  if (typeof meters !== "number") {
    return NextResponse.json({ error: "Rute tidak ditemukan." }, { status: 502 });
  }
  return NextResponse.json({ meters });
}