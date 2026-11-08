import Image from "next/image";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-[73px] items-center justify-between bg-navy pr-5 pl-2">
      <Image src="/images/logo.png" alt="ANJEM YUKSW" width={103} height={57} priority />
      <button
        type="button"
        aria-label="Buka menu"
        className="rounded-md text-sand transition-colors hover:bg-white/10"
      >
        <Menu className="size-10" strokeWidth={3} aria-hidden />
      </button>
    </header>
  );
}