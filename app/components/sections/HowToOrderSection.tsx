import AccordionCard from "../AccordionCard";
import ChatExample from "./ChatExample";
import { CHAT_EXAMPLES } from "@/lib/chatExamples";

const steps = [
  {
    title: "Join ke Grup Anjem YUKSW",
    lines: ["Link Grup dapat diakses melalui Bio Instagram dan scan Kode QR yang tertera di bawah ini/Instagram"],
  },
  {
    title: "Chat kebutuhan di grup",
    lines: ["Customer dapat langsung menuliskan keperluan di grup ANJEM YUKSW"],
  },
  {
    title: "Driver menanggapi chat by PC",
    lines: [
      "Setelah Customer menuliskan",
      "keperluan, Driver akan",
      "menanggapi chat via PC lalu mereact chat Customer. Detail",
      "pesanan dapat dikomunikasikan",
      "antara Customer dan Driver",
    ],
  },
];

export default function HowToOrderSection() {
  return (
    <AccordionCard id="how-to-order" title="HOW TO ORDER">
      <ol className="mt-3.5 flex flex-col gap-8">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col items-center">
            <span className="flex size-[30px] items-center justify-center rounded-full bg-sand text-[15px] font-bold text-navy">
              {i + 1}
            </span>
            <h3 className="mt-0.5 flex h-[30px] items-center text-xl font-bold whitespace-nowrap text-sand">
              {s.title}
            </h3>
            <div className="mt-[3px] w-[277px] text-justify text-sm text-sand">
              {s.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <p
        id="contoh-order"
        className="mx-auto mt-[42px] flex h-7 w-[210px] scroll-mt-[89px] items-center justify-center rounded-lg bg-sand text-xl font-bold text-navy"
      >
        Contoh detail order
      </p>

      <div className="mt-8 flex flex-col gap-8">
        {CHAT_EXAMPLES.map((ex) => (
          <ChatExample key={ex.caption} {...ex} />
        ))}
      </div>
    </AccordionCard>
  );
}