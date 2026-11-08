export type ChatExampleData = {
  caption: string;
  side: "left" | "right";
  images: [
    { src: string; width: number; height: number },
    { src: string; width: number; height: number },
  ];
  alt?: string;
};

export const CHAT_EXAMPLES: ChatExampleData[] = [
  {
    caption: "Contoh chat order customer",
    side: "left",
    images: [
      { src: "/images/chat/1.1.jpeg", width: 720, height: 217 },
      { src: "/images/chat/1.2.jpeg", width: 720, height: 171 },
    ],
  },
  {
    caption: "Contoh chat driver menanggapi chat customer",
    side: "right",
    images: [
      { src: "/images/chat/2.1.jpeg", width: 720, height: 340 },
      { src: "/images/chat/2.2.jpeg", width: 720, height: 387 },
    ],
  },
  {
    caption: "Contoh react chat driver apabila customer membalas chat dari driver tersebut",
    side: "left",
    images: [
      { src: "/images/chat/3.1.jpeg", width: 720, height: 217 },
      { src: "/images/chat/3.3.jpeg", width: 720, height: 171 },
    ],
  },
];