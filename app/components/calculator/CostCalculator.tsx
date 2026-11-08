"use client";

import { useRef, useState } from "react";
import type { Place } from "@/lib/geo";
import { estimateFee, roundedKm } from "@/lib/pricing";
import { useSections } from "../SectionsProvider";
import EstimateDetail, { type Estimate } from "./EstimateDetail";
import PointField from "./PointField";

type FieldKey = "pickup" | "drop";

export default function CostCalculator() {
  const { isOpen, toggle } = useSections();
  const open = isOpen("kalkulator");
  const [points, setPoints] = useState<Record<FieldKey, Place | null>>({ pickup: null, drop: null });
  const [active, setActive] = useState<FieldKey | null>(null);
  const [estimate, setEstimate] = useState<Estimate>({ state: "idle" });
  const abortRef = useRef<AbortController | null>(null);

  async function calculate(from: Place, to: Place) {
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;
    setEstimate({ state: "loading" });
    try {
      const res = await fetch("/api/distance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, to }),
        signal: ctrl.signal,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Gagal menghitung jarak.");
      const km = roundedKm(data.meters);
      setEstimate({ state: "ok", km, fee: estimateFee(km) });
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      setEstimate({ state: "error", message: (err as Error).message });
    }
  }

  function handleSelect(field: FieldKey, place: Place) {
    const next = { ...points, [field]: place };
    setPoints(next);
    setActive(null);
    if (next.pickup && next.drop) void calculate(next.pickup, next.drop);
  }

  const fields: { key: FieldKey; placeholder: string; mirrored: boolean }[] = [
    { key: "pickup", placeholder: "Pilih titik jemput", mirrored: false },
    { key: "drop", placeholder: "Pilih titik antar", mirrored: true },
  ];

  return (
    <div id="kalkulator" className="scroll-mt-[89px]">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="kalkulator-panel"
        onClick={() => toggle("kalkulator")}
        className="glass mx-auto mt-[38px] block h-[22px] w-[203px] rounded-[5px] text-xs font-semibold text-sand"
      >
        Coba Kalkulator Biaya
      </button>

      <div
        id="kalkulator-panel"
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div
            className={`mx-auto mt-[11px] w-[313px] rounded-[7px] bg-sand px-3 pt-[9px] pb-6 text-navy transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="flex h-12 items-center text-[10px] font-semibold">
              *Catatan: biaya dari kalkulator ini hanya untuk rujukan jika jarak anjem lebih dari
              7km atau diluar daftar pricelist yang dicantumkan.
            </p>
            <div className="mt-[21px] flex flex-col gap-[9px]">
              {fields.map((f) => (
                <PointField
                  key={f.key}
                  placeholder={f.placeholder}
                  mirrored={f.mirrored}
                  place={points[f.key]}
                  open={active === f.key}
                  onToggle={() => setActive(active === f.key ? null : f.key)}
                  onSelect={(p) => handleSelect(f.key, p)}
                />
              ))}
            </div>
            <EstimateDetail estimate={estimate} />
          </div>
        </div>
      </div>
    </div>
  );
}