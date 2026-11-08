import { NextRequest, NextResponse } from "next/server";
import { DEFAULT_CENTER } from "@/lib/geo";

const BASE = "https://api.openrouteservice.org/geocode";

type Feature = {
  geometry: { coordinates: [number, number] };
  properties: { label: string };
};

export async function GET(req: NextRequest) {
  const key = process.env.ORS_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "ORS_API_KEY belum diatur" }, { status: 500 });
  }

  const sp = req.nextUrl.searchParams;
  const q = sp.get("q")?.trim();
  const url = new URL(`${BASE}/${q ? "search" : "reverse"}`);
  url.searchParams.set("api_key", key);
  url.searchParams.set("size", q ? "5" : "1");

  if (q) {
    url.searchParams.set("text", q);
    url.searchParams.set("boundary.country", "ID");
    url.searchParams.set("focus.point.lat", String(DEFAULT_CENTER.lat));
    url.searchParams.set("focus.point.lon", String(DEFAULT_CENTER.lng));
  } else if (sp.has("lat") && sp.has("lng") && Number.isFinite(Number(sp.get("lat"))) && Number.isFinite(Number(sp.get("lng")))) {
    url.searchParams.set("point.lat", sp.get("lat")!);
    url.searchParams.set("point.lon", sp.get("lng")!);
  } else {
    return NextResponse.json({ error: "Parameter tidak valid" }, { status: 400 });
  }

  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    return NextResponse.json({ error: "Pencarian lokasi gagal" }, { status: 502 });
  }

  const data = (await res.json()) as { features?: Feature[] };
  const results = (data.features ?? []).map((f) => ({
    label: f.properties.label,
    lat: f.geometry.coordinates[1],
    lng: f.geometry.coordinates[0],
  }));
  return NextResponse.json({ results });
}