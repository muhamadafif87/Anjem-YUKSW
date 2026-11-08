import Image from "next/image";
import { INSTAGRAM_URL, WA_ADMIN_URL } from "@/lib/links";

const contacts = [
  {
    icon: "/icons/instagram.svg",
    text: "Instagram: @anjem_yuksw",
    href: INSTAGRAM_URL,
    label: "Buka Instagram ANJEM YUKSW",
  },
  {
    icon: "/icons/whatsapp.svg",
    text: "Admin yuksw: 0819-9005-4089",
    href: WA_ADMIN_URL,
    label: "Chat WhatsApp admin ANJEM YUKSW",
  },
];

export default function Footer() {
  return (
    <footer className="pt-[92px] pb-[50px] pl-[30px] font-heading text-navy">
      <p className="text-[24px] leading-7 whitespace-nowrap">For More Information, hit us on:</p>
      <ul>
        {contacts.map((c) => (
          <li key={c.text}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.label}
              className="flex h-7 w-fit items-center gap-[11px] text-[20px] transition-[translate,opacity] duration-200 hover:translate-x-1 hover:opacity-75"
            >
              <Image src={c.icon} alt="" width={20} height={20} />
              {c.text}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}