import AccordionCard from "../AccordionCard";
import { WA_GROUP_URL } from "@/lib/links";

export default function JoinGroupSection() {
  return (
    <AccordionCard id="join-grup" title="JOIN GRUP WA ANJEM YUKSW">
      <p className="mt-3 text-center text-sm font-semibold text-sand">
        Gabung ke grup untuk mulai memesan layanan.
      </p>
      <a
        href={WA_GROUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="glass mx-auto mt-4 flex h-7 w-[210px] items-center justify-center rounded-lg text-xl font-bold text-sand"
      >
        Join sekarang
      </a>
    </AccordionCard>
  );
}