"use client";

import { useId, type ReactNode } from "react";
import { ChevronsDown, ChevronsUp } from "lucide-react";
import { useSections } from "./SectionsProvider";

type Props = { id: string; title: ReactNode; children?: ReactNode };

export default function AccordionCard({ id, title, children }: Props) {
  const { isOpen, setOpen } = useSections();
  const open = isOpen(id);
  const panelId = useId();

  return (
    <section
      id={id}
      className="scroll-mt-[89px] rounded-[13px] bg-navy pt-5 pb-[13px] shadow-card transition-[translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
    >
      <h2 className="mx-auto flex h-[70px] w-[291px] items-center justify-center text-center font-heading text-[32px] leading-[31px] text-sand">
        <span>{title}</span>
      </h2>

      {!open && (
        <button
          type="button"
          aria-expanded={false}
          aria-controls={panelId}
          onClick={() => setOpen(id, true)}
          className="glass mx-auto mt-2.5 flex h-[22px] w-[155px] animate-fade-in items-center justify-between rounded-[5px] px-1.5 text-xs font-semibold text-sand"
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
          <div
            className={`transition-[opacity,translate] duration-300 ${
              open ? "translate-y-0 opacity-100 delay-100" : "-translate-y-2 opacity-0"
            }`}
          >
            {children}
            <button
              type="button"
              aria-label="Tutup"
              aria-expanded
              aria-controls={panelId}
              onClick={() => setOpen(id, false)}
              className="glass mx-auto mt-3 flex size-7 items-center justify-center rounded-full text-sand"
            >
              <ChevronsUp className="size-4" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}