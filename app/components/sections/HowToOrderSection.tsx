import AccordionCard from "../AccordionCard";

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

const bubble = "h-[47px] w-[144px] rounded-[7px] border border-black bg-chat";

function ChatExample({ caption, side = "left" }: { caption: string; side?: "left" | "right" }) {
  const right = side === "right";
  return (
    <figure className="flex flex-col px-[18px]">
      <div className={`${bubble} ${right ? "mr-0.5 self-end" : ""}`} />
      <div className={`${bubble} -mt-4 ${right ? "mr-[51px] self-end" : "ml-[49px]"}`} />
      <figcaption
        className={`mt-[17px] w-[240px] text-base text-white ${right ? "self-end text-right" : "ml-0.5"}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default function HowToOrderSection() {
  return (
    <AccordionCard title="HOW TO ORDER">
      <ol className="mt-3.5 flex flex-col gap-8">
        {steps.map((s, i) => (
          <li key={s.title} className="flex flex-col items-center">
            <span className="flex size-[30px] items-center justify-center rounded-full bg-chat text-[15px] font-bold text-navy">
              {i + 1}
            </span>
            <h3 className="mt-0.5 flex h-[30px] items-center text-xl font-bold whitespace-nowrap text-white">
              {s.title}
            </h3>
            <div className="mt-[3px] w-[277px] text-justify text-sm text-white">
              {s.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <p className="mx-auto mt-[42px] flex h-7 w-[210px] items-center justify-center rounded-lg bg-chat text-xl font-bold text-navy">
        Contoh detail order
      </p>

      <div className="mt-8 flex flex-col gap-8">
        <ChatExample caption="Contoh chat order customer" />
        <ChatExample caption="Contoh chat driver menanggapi chat customer" side="right" />
        <ChatExample caption="Contoh react chat driver apabila customer membalas chat dari driver tersebut" />
      </div>
    </AccordionCard>
  );
}