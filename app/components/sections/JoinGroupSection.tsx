import AccordionCard from "../AccordionCard";

const WA_GROUP_URL = "https://chat.whatsapp.com/FxhECeqaCRNLUsEyTTMLpw?s=cl&p=a&iam=2";

export default function JoinGroupSection() {
  return (
    <AccordionCard title="JOIN GRUP WA ANJEM YUKSW">
      <p className="mt-3 text-center text-sm font-semibold text-white">
        Gabung ke grup untuk mulai memesan layanan.
      </p>
      <a
        href={WA_GROUP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-auto mt-4 flex h-7 w-[210px] items-center justify-center rounded-lg bg-chat text-xl font-bold text-navy transition-colors hover:bg-white"
      >
        Join sekarang
      </a>
    </AccordionCard>
  );
}