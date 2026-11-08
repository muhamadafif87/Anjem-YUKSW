"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { DEFAULT_CENTER, type LatLng, type Place } from "@/lib/geo";

// Leaflet butuh `window`, jadi hanya dimuat di client
const MapPicker = dynamic(() => import("./MapPicker"), {
  ssr: false,
  loading: () => <div className="h-[180px] animate-pulse rounded-[7px] bg-navy/15" />,
});

const coordLabel = (p: LatLng) => `${p.lat.toFixed(5)}, ${p.lng.toFixed(5)}`;

export default function PointPicker({
  initial,
  onConfirm,
}: {
  initial: Place | null;
  onConfirm: (p: Place) => void;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Place[]>([]);
  const [draft, setDraft] = useState<Place | null>(initial);
  const [fly, setFly] = useState<LatLng | null>(null);
  const reverseSeq = useRef(0);

  // Pencarian dengan debounce 500ms (hemat kuota ORS)
  useEffect(() => {
    const q = query.trim();
    if (q.length < 3) return;
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      try {
        const res = await fetch(`/api/geocode?q=${encodeURIComponent(q)}`, { signal: ctrl.signal });
        const data = await res.json();
        setResults(res.ok ? data.results : []);
      } catch {
        /* dibatalkan / gagal: abaikan */
      }
    }, 500);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [query]);

  async function handleMapPick(p: LatLng) {
    const seq = ++reverseSeq.current;
    setDraft({ ...p, label: coordLabel(p) });
    try {
      const res = await fetch(`/api/geocode?lat=${p.lat}&lng=${p.lng}`);
      const label = (await res.json()).results?.[0]?.label;
      if (label && seq === reverseSeq.current) setDraft({ ...p, label });
    } catch {
      /* tetap pakai label koordinat */
    }
  }

  function handleResult(place: Place) {
    reverseSeq.current++;
    setDraft(place);
    setFly(place);
    setResults([]);
    setQuery("");
  }

  return (
    <div className="mt-2 w-[289px] animate-slide-down">
      <input
        type="search"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          if (e.target.value.trim().length < 3) setResults([]);
        }}
        placeholder="Cari lokasi (mis. Pasar Raya Salatiga)"
        aria-label="Cari lokasi"
        className="h-8 w-full rounded-[7px] border border-navy/30 bg-white/40 px-3 text-xs text-navy placeholder:text-navy/60 focus:outline-2 focus:outline-navy"
      />
      {results.length > 0 && (
        <ul className="mt-1 max-h-28 overflow-auto rounded-[7px] bg-white/60 text-xs">
          {results.map((r) => (
            <li key={`${r.lat},${r.lng}`}>
              <button
                type="button"
                onClick={() => handleResult(r)}
                className="w-full px-3 py-1.5 text-left transition-colors hover:bg-navy/10"
              >
                {r.label}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div className="isolate mt-2 overflow-hidden rounded-[7px] border border-navy/30">
        <MapPicker center={initial ?? DEFAULT_CENTER} value={draft} flyTo={fly} onPick={handleMapPick} />
      </div>

      <p className="mt-2 truncate text-[10px] font-semibold">
        {draft ? draft.label : "Ketuk peta atau cari lokasi untuk menentukan titik."}
      </p>
      <button
        type="button"
        disabled={!draft}
        onClick={() => draft && onConfirm(draft)}
        className="glass-dark mt-2 h-8 w-full rounded-[7px] text-xs font-semibold text-sand"
      >
        Pilih titik ini
      </button>
    </div>
  );
}