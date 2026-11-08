"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type { MenuItem } from "@/lib/menu";

type SectionsCtx = {
  isOpen: (id: string) => boolean;
  setOpen: (id: string, value: boolean) => void;
  toggle: (id: string) => void;
  goTo: (item: MenuItem) => void;
};

const Ctx = createContext<SectionsCtx | null>(null);

export function useSections() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSections harus dipakai di dalam <SectionsProvider>");
  return ctx;
}

export function SectionsProvider({ children }: { children: ReactNode }) {
  const [open, setOpenIds] = useState<Set<string>>(() => new Set());
  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  }, [open]);

  const setOpen = useCallback((id: string, value: boolean) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (value) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  const toggle = useCallback((id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (!next.delete(id)) next.add(id);
      return next;
    });
  }, []);

  // Buka kartu tujuan, lalu smooth scroll (tunggu animasi buka ±300ms)
  const goTo = useCallback((item: MenuItem) => {
    const needsOpen = item.opens.some((id) => !openRef.current.has(id));
    setOpenIds((prev) => new Set([...prev, ...item.opens]));
    window.setTimeout(
      () => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        document
          .getElementById(item.target)
          ?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", `#${item.target}`);
      },
      needsOpen ? 380 : 80,
    );
  }, []);

  const value = useMemo(
    () => ({ isOpen: (id: string) => open.has(id), setOpen, toggle, goTo }),
    [open, setOpen, toggle, goTo],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}