export type MenuItem = {
  label: string;
  target: string; // id elemen tujuan scroll
  opens: string[]; // id section/kartu yang harus dibuka dulu
};

export const MENU_ITEMS: MenuItem[] = [
  { label: "Contoh orderan", target: "contoh-order", opens: ["how-to-order"] },
  { label: "Kalkulator biaya", target: "kalkulator", opens: ["pricelist", "kalkulator"] },
  { label: "How to order", target: "how-to-order", opens: ["how-to-order"] },
  { label: "Pricelist", target: "pricelist", opens: ["pricelist"] },
  { label: "Join grup WA", target: "join-grup", opens: ["join-grup"] },
];