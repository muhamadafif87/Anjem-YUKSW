import { formatRupiah } from "@/lib/pricing";

export type Estimate =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "ok"; km: number; fee: number }
  | { state: "error"; message: string };

export default function EstimateDetail({ estimate }: { estimate: Estimate }) {
  const km = estimate.state === "ok" ? estimate.km : "–";
  const fee =
    estimate.state === "ok"
      ? formatRupiah(estimate.fee)
      : estimate.state === "loading"
        ? "Menghitung…"
        : "Rp X.XXX";

  return (
    <section aria-live="polite" className="mt-[23px]">
      <h4 className="text-sm leading-[18px] font-bold">Detail estimasi biaya</h4>
      <div className="mt-0.5 h-0.5 w-[256px] bg-navy" />

      <div className="relative mt-[19px] pr-[7px]">
        <span aria-hidden className="absolute top-2.5 left-[9px] h-11 w-0.5 bg-navy" />
        <div className="flex h-5 items-center gap-2 text-sm">
          <span aria-hidden className="size-5 shrink-0 rounded-full bg-navy" />
          <p>
            Jarak tempuh: <span className="font-medium">{km}</span> Km
          </p>
        </div>
        <div className="mt-6 flex h-5 items-center gap-2">
          <span aria-hidden className="size-5 shrink-0 rounded-full bg-navy" />
          <p className="flex-1 text-sm font-semibold">Total estimasi biaya:</p>
          <p className="text-xl font-extrabold">{fee}</p>
        </div>
      </div>

      {estimate.state === "error" && (
        <p role="alert" className="mt-4 text-[10px] font-semibold">
          {estimate.message}
        </p>
      )}
    </section>
  );
}