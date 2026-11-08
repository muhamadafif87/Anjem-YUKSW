import Image from "next/image";
import type { ChatExampleData } from "@/lib/chatExamples";

const bubble = "h-[47px] w-[144px] rounded-[7px] border border-black bg-sand";

export default function ChatExample({ caption, side, image, alt }: ChatExampleData) {
  const right = side === "right";

  return (
    <figure className="flex flex-col px-[18px]">
      {image ? (
        <Image
          src={image}
          alt={alt ?? caption}
          width={0}
          height={0}
          sizes="260px"
          className={`h-auto w-[260px] rounded-[7px] border border-black ${right ? "mr-0.5 self-end" : ""}`}
        />
      ) : (
        <>
          <div className={`${bubble} ${right ? "mr-0.5 self-end" : ""}`} />
          <div className={`${bubble} -mt-4 ${right ? "mr-[51px] self-end" : "ml-[49px]"}`} />
        </>
      )}
      <figcaption
        className={`mt-[17px] w-[240px] text-base text-sand ${right ? "self-end text-right" : "ml-0.5"}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}