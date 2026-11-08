import AccordionCard from "../AccordionCard";

const services = [
  "Antar-jemput",
  "Jasa titip makanan",
  "Jasa titip makanan",
  "Jasa titip makanan",
  "Jasa titip makanan",
  "Jasa titip makanan",
];
const others = ["MUA", "DESAIN GRAFIS", "NAIL ART", "FOTOGRAFER", "APK PREMIUM", "DLL"];

export default function ServicesSection() {
  return (
    <AccordionCard id="services" title="JENIS LAYANAN YANG DISEDIAKAN">
      <div className="relative mt-[25px]">
        <div aria-hidden className="absolute top-[11px] bottom-[11px] left-[43px] w-0.5 bg-sand" />
        <ul className="relative flex flex-col gap-3.5 pl-[34px] text-sm leading-[23px] font-semibold text-sand">
          {services.map((s, i) => (
            <li key={i} className="flex items-center gap-2.5">
              <span aria-hidden className="size-5 shrink-0 rounded-full bg-sand" />
              {s}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-3.5 pl-10 text-sm font-semibold text-sand">*S&amp;K berlaku</p>

      <h3 className="mt-[31px] pl-[31px] text-xl leading-[21px] font-bold text-sand">
        KAMI JUGA MENYEDIAKAN:
      </h3>
      <ul className="mt-[11px] ml-[50px] list-disc text-xl leading-[29px] font-medium text-sand">
        {others.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
    </AccordionCard>
  );
}