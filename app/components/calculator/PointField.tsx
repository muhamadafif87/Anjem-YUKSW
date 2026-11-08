"use client";

import { ChevronDown } from "lucide-react";
import type { Place } from "@/lib/geo";
import PointPicker from "./PointPicker";

type Props = {
  placeholder: string;
  place: Place | null;
  open: boolean;
  mirrored?: boolean; // ikon di kiri + teks rata kanan (sesuai Figma tombol ke-2)
  onToggle: () => void;
  onSelect: (p: Place) => void;
};

export default function PointField({ placeholder, place, open, mirrored, onToggle, onSelect }: Props) {
  return (
    <div>
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className={`glass-dark flex h-[33px] w-[201px] items-center gap-2 rounded-[7px] px-3.5 text-xs font-semibold text-sand ${
          mirrored ? "flex-row-reverse" : ""
        }`}
      >
        <span className={`min-w-0 flex-1 truncate ${mirrored ? "text-right" : "text-left"}`}>
          {place?.label ?? placeholder}
        </span>
        <ChevronDown
          aria-hidden
          className={`size-[18px] shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <PointPicker initial={place} onConfirm={onSelect} />}
    </div>
  );
}