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
  image: {
    isImage: boolean;
    url: string | null;
  };
  setImage: (a: { isImage: boolean; url: string | null }) => void;
}

const useTransformStore = create<TransformStore>()((set) => ({
  image: {
    isImage: false,
    url: null,
  },
  setImage: (image) => {
    set({ image });
  },
}));

export { useGlobalStore, useTransformStore };
