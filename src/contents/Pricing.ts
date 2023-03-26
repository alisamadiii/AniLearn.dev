type PricingTypes = {
  level: string;
  price: number;
  discount: number | null;
  video: boolean;
  powerPoint: boolean;
  shareVideo: boolean;
  shareVideoDetails: string[];
  attribution: null | boolean;
}[];

export const PRICING: PricingTypes = [
  {
    level: "basic",
    price: 29,
    discount: 69,
    video: true,
    powerPoint: true,
    shareVideo: false,
    shareVideoDetails: ["to your friends", "to social media"],
    attribution: null,
  },
  {
    level: "intermediate",
    price: 39,
    discount: null,
    video: true,
    powerPoint: true,
    shareVideo: true,
    shareVideoDetails: ["to your friends", "to social media"],
    attribution: true,
  },
  {
    level: "Advance",
    price: 49,
    discount: null,
    video: true,
    powerPoint: true,
    shareVideo: true,
    shareVideoDetails: ["to your friends", "to social media"],
    attribution: false,
  },
];
