import Image from "next/image";

const contacts = [
  { icon: "/icons/instagram.svg", text: "Instagram: @anjem_yuksw" },
  { icon: "/icons/whatsapp.svg", text: "Admin yuksw: 0819-9005-4089" },
];

export default function Footer() {
  return (
    <footer className="pt-[92px] pb-[50px] pl-[30px] font-heading text-navy">
      <p className="text-[24px] leading-7 whitespace-nowrap">For More Information, hit us on:</p>
      <ul>
        {contacts.map((c) => (
          <li key={c.text} className="flex h-7 items-center gap-[11px] text-[20px]">
            <Image src={c.icon} alt="" width={20} height={20} />
            {c.text}
          </li>
        ))}
      </ul>
    </footer>
  );
}