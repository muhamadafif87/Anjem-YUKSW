export type ChatExampleData = {
  caption: string;
  side: "left" | "right";
  /** Path di folder public. Kosong = tampil bubble placeholder sesuai Figma. */
  image?: string;
  alt?: string;
};

// Taruh gambar di public/images/chat/, lalu isi `image`.
// Contoh: image: "/images/chat/order-customer.png"
export const CHAT_EXAMPLES: ChatExampleData[] = [
  { caption: "Contoh chat order customer", side: "left" },
  { caption: "Contoh chat driver menanggapi chat customer", side: "right" },
  {
    caption: "Contoh react chat driver apabila customer membalas chat dari driver tersebut",
    side: "left",
  },
];