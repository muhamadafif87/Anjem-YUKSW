"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronsDown, ChevronsUp } from "lucide-react";

type Props = { title: ReactNode; children?: ReactNode; defaultOpen?: boolean };

export default function AccordionCard({ title, children, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section className="rounded-[13px] bg-navy pt-5 pb-[13px] shadow-card">
      <h2 className="mx-auto flex h-[70px] w-[291px] items-center justify-center text-center font-heading text-[32px] leading-[31px] text-sand">
        <span>{title}</span>
      </h2>

      {!open && (
        <button
          type="button"
          aria-expanded={false}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
          className="mx-auto mt-2.5 flex h-[22px] w-[155px] items-center justify-between rounded-[5px] bg-chat/20 px-1.5 text-xs font-semibold text-sand transition-colors hover:bg-chat/30"
        >
          Baca selengkapnya
          <ChevronsDown className="size-3" aria-hidden />
        </button>
      )}

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          {children}
          <button
            type="button"
            aria-label="Tutup"
            aria-expanded
            aria-controls={panelId}
            onClick={() => setOpen(false)}
            className="mx-auto mt-3 flex rounded-sm text-sand transition-colors hover:bg-white/10"
          >
            <ChevronsUp className="size-5" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}