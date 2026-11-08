"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import MenuDrawer from "./MenuDrawer";

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <header className="fixed top-0 left-1/2 z-50 flex h-[73px] w-full max-w-[402px] -translate-x-1/2 items-center justify-between bg-navy pr-4 pl-2 shadow-[0_2px_8px_rgba(0,0,0,0.25)]">
        <Image src="/images/logo.png" alt="ANJEM YUKSW" width={103} height={57} priority />
        <button
          type="button"
          aria-label="Buka menu"
          aria-expanded={open}
          aria-controls="menu-drawer"
          onClick={() => setOpen(true)}
          className="glass flex rounded-lg p-1 text-sand"
        >
          <Menu className="size-10" strokeWidth={2.5} aria-hidden />
        </button>
      </header>
      <MenuDrawer open={open} onClose={close} />
    </>
  );
}