"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import { MENU_ITEMS } from "@/lib/menu";
import { useSections } from "./SectionsProvider";

export default function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { goTo } = useSections();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <div
      id="menu-drawer"
      role="dialog"
      aria-modal="true"
      aria-label="Menu navigasi"
      inert={!open}
      className={`fixed inset-y-0 left-1/2 z-[60] w-full max-w-[402px] -translate-x-1/2 overflow-hidden transition-[visibility] duration-300 ${
        open ? "visible" : "invisible"
      }`}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />
      <nav
        className={`absolute inset-y-0 right-0 flex w-[260px] flex-col bg-navy/90 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-heading text-[24px] text-sand">MENU</p>
          <button
            type="button"
            aria-label="Tutup menu"
            onClick={onClose}
            className="glass flex size-10 items-center justify-center rounded-lg text-sand"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <ul className="mt-6 flex flex-col gap-3">
          {MENU_ITEMS.map((item, i) => (
            <li
              key={item.target}
              style={{ transitionDelay: open ? `${120 + i * 50}ms` : "0ms" }}
              className={`transition-[opacity,translate] duration-300 ${
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
              }`}
            >
              <a
                href={`#${item.target}`}
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  goTo(item);
                }}
                className="glass flex h-12 items-center rounded-xl px-4 text-sm font-semibold text-sand"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}