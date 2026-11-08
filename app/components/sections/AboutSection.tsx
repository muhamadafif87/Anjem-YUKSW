import Image from "next/image";
import AccordionCard from "../AccordionCard";

export default function AboutSection() {
  return (
    <AccordionCard title={<>APA ITU<br />ANJEM YUKSW?</>}>
      <Image
        src="/images/logo.png"
        alt="ANJEM YUKSW"
        width={154}
        height={85}
        className="mx-auto mt-[11px]"
      />
      <div className="mx-auto mt-2 w-[259px] text-justify text-sm font-semibold tracking-[-0.14px] text-sand">
        <p>
          ANJEM YUKSW merupakan platform layanan jasa yang hadir untuk membantu
          berbagai kebutuhan mahasiswa UKSW dan Sekitarnya
        </p>
        <p>
          secara praktis dan terpercaya. Kami siap menjadi solusi untuk berbagai
          keperluan Anda dengan pelayanan yang mudah dan efisien.
        </p>
      </div>
    </AccordionCard>
  );
}