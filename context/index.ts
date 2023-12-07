import { create } from "zustand";

interface GlobalStore {
  hoverTech: "html" | "css" | "javascript" | null;
  setHoverTech: (a: "html" | "css" | "javascript" | null) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (a: boolean) => void;
}

const useGlobalStore = create<GlobalStore>()((set) => ({
  hoverTech: null,
  setHoverTech: (hoverTech) => {
    set({ hoverTech });
  },
  isMenuOpen: false,
  setIsMenuOpen: (isMenuOpen: boolean) => {
    set({ isMenuOpen });
  },
}));

interface TransformStore {
  image: boolean;
  setImage: (a: boolean) => void;
}

const useTransformStore = create<TransformStore>()((set) => ({
  image: false,
  setImage: (image) => {
    set({ image });
  },
}));

export { useGlobalStore, useTransformStore };
