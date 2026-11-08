"use client";

import { useState } from "react";

const examples = [
  {
    title: "Contoh Orderan Barang Sedang",
    body: "Customer memesan 3 es teh dan 3 ayam geprek dari 1 tempat yang sama di sekitar UKSW diantar ke kos area Cungkup.\n* maka perhitungan fee adalah= 6K(fee)+1K(fee kelipatan barang sedang)=7K",
  },
  {
    title: "Contoh Orderan Barang Besar",
    body: "Customer memesan galon dari sekitar UKSW diantar ke kos dekat APK.\n\n*maka perhitungan fee adalah=6K(fee)+1K(fee kelipatan barang besar)=7K",
  },
];

export default function FeeExamples() {
  const [show, setShow] = useState(false);

  return (
    <div className="mt-6">
      <button
        type="button"
        aria-expanded={show}
        onClick={() => setShow((v) => !v)}
        className="glass mx-auto block h-[22px] w-[203px] rounded-[5px] text-xs font-semibold text-sand"
      >
        Lihat contoh perhitungan fee
      </button>
      {show && (
        <div className="mx-auto mt-[23px] flex w-[313px] animate-slide-down flex-col gap-2">
          {examples.map((e) => (
            <div key={e.title} className="rounded-[7px] bg-sand px-3.5 py-2 text-xs text-navy">
              <h5 className="font-bold">{e.title}</h5>
              <p className="mt-1 whitespace-pre-line">{e.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}