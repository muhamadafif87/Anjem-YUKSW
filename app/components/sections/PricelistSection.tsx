import AccordionCard from "../AccordionCard";
import CostCalculator from "../calculator/CostCalculator";
import FeeExamples from "./FeeExamples";
import { ItemCategory, PriceRow } from "./PricelistParts";

const anjem = [
  ["Area UKSW dan Sekitarnya", "5k"],
  ["UKSW Pusat-FTI", "7k"],
  ["UKSW-Pancasila", "6k"],
  ["UKSW-Pasar Raya", "6k"],
  ["UKSW-Pasar Sapi", "7k"],
  ["UKSW-Terminal Tingkir", "13k"],
];

export default function PricelistSection() {
  return (
    <AccordionCard id="pricelist" title="PRICELIST">
      <p className="mx-auto mt-[9px] w-[311px] text-xs font-semibold text-sand">
        *Detail Pricelist ini dibuat sebagai acuan agar sesuai bagi customer dan beban kerja driver
      </p>

      <h3 className="mt-3 pl-5 text-2xl font-bold text-sand">ANJEM</h3>
      <ul className="pr-[42px] pl-5">
        {anjem.map(([label, price]) => (
          <PriceRow key={label} label={label} price={price} />
        ))}
      </ul>

      <div className="mt-[13px] flex items-center gap-0.5 pl-5 text-sand">
        <div className="w-36 text-center">
          <h3 className="text-2xl font-bold">JASTIP + 1k</h3>
          <p className="-mt-1.5 text-xs leading-6">(Barang/Makanan)</p>
        </div>
        <p className="text-xs whitespace-nowrap">
          *Pricelist Jastip
          <br />
          exclude uang parkir
        </p>
      </div>
      <p className="mt-1 pl-5 text-[15px] font-semibold text-sand">*ORDER MAMPIR KE TEMPAT LAIN +1K</p>

      <h3 className="mt-[38px] text-center text-xl font-bold text-sand">KATEGORI BARANG JASTIP</h3>
      <div className="mx-auto mt-0.5 h-0.5 w-[277px] bg-sand" />

      <div className="mt-6 flex flex-col gap-[15px]">
        <ItemCategory
          width="w-[218px]"
          name="Barang Kecil"
          example="Contoh barang kecil: Alat tulis, Make-up, Skincare dan barang kecil lainnya"
          note="*Tidak ada tambahan fee"
        />
        <ItemCategory
          width="w-[215px]"
          name="Barang Sedang"
          example="Contoh barang sedang: Minuman dan Makanan"
          note="*fee +1k, kelipatan 5 barang"
        />
        <ItemCategory
          width="w-[201px]"
          name="Barang Besar"
          example="Contoh barang besar: Beras sekarung, galon, alat elektronik, helm, dll"
          note="*fee +1k, Berlaku kelipatan"
        />
      </div>

      <FeeExamples />
      <CostCalculator />
    </AccordionCard>
  );
}