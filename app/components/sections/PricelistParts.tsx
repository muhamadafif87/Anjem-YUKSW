export function PriceRow({ label, price }: { label: string; price: string }) {
  return (
    <li className="flex h-6 items-center justify-between text-xs">
      <span className="text-white">{label}</span>
      <span className="text-white">{price}</span>
    </li>
  );
}

export function ItemCategory({
  name,
  example,
  note,
  width,
}: {
  name: string;
  example: string;
  note: string;
  width: string;
}) {
  return (
    <div className="flex items-center justify-between pr-[11px] pl-5 text-sand">
      <div className={width}>
        <h4 className="text-sm font-semibold">{name}</h4>
        <p className="text-xs">{example}</p>
      </div>
      <p className="w-[92px] text-right text-[10px]">{note}</p>
    </div>
  );
}