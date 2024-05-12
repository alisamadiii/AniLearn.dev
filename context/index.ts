import { create } from "zustand";

interface GlobalStore {
  hoverTech: "html" | "css" | "javascript" | null;
  setHoverTech: (a: "html" | "css" | "javascript" | null) => void;
}

const useGlobalStore = create<GlobalStore>()((set) => ({
  hoverTech: null,
  setHoverTech: (hoverTech) => {
    set({ hoverTech });
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

interface ShadowCompareDesignTypes {
  shadows: string[][];
  setShadows: (a: string[][]) => void;
  updateShadows: (
    index: number,
    action: "x" | "y" | "blur" | "spread" | "color",
    value: any
  ) => void;
}

const useShadowCompareDesign = create<ShadowCompareDesignTypes>()((set) => ({
  shadows: [],
  setShadows: (shadows) => {
    set({ shadows });
  },
  updateShadows: (index, action, value) =>
    set((state) => {
      let newValue = [...state.shadows];

      if (action === "x") {
        newValue[index][0] = `${value}px`;
      } else if (action === "y") {
        newValue[index][1] = `${value}px`;
      } else if (action === "blur") {
        newValue[index][2] = `${value}px`;
      } else if (action === "spread") {
        newValue[index][3] = `${value}px`;
      } else if (action === "color") {
        newValue[index][4] = value;
      }

      return { shadows: newValue };
    }),
}));

export { useGlobalStore, useTransformStore, useShadowCompareDesign };
