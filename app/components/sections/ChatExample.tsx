import Image from "next/image";
import type { ChatExampleData } from "@/lib/chatExamples";

export default function ChatExample({ caption, side, images, alt }: ChatExampleData) {
  const right = side === "right";
  const [firstImage, secondImage] = images;
  const imageLabel = alt ?? caption;

  return (
    <figure className="flex flex-col px-[18px]">
      <div className={`flex w-[240px] flex-col ${right ? "mr-0.5 self-end" : ""}`}>
        <Image
          src={firstImage.src}
          alt={`${imageLabel} (pesan pertama)`}
          width={firstImage.width}
          height={firstImage.height}
          sizes="180px"
          className={`h-auto w-[180px] rounded-[7px] border border-black ${right ? "self-end" : ""}`}
        />
        <Image
          src={secondImage.src}
          alt={`${imageLabel} (pesan kedua)`}
          width={secondImage.width}
          height={secondImage.height}
          sizes="180px"
          className={`-mt-4 h-auto w-[180px] rounded-[7px] border border-black ${right ? "mr-[60px] self-end" : "ml-[60px]"}`}
        />
      </div>
      <figcaption
        className={`mt-[17px] w-[240px] text-base text-sand ${right ? "self-end text-right" : "ml-0.5"}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}