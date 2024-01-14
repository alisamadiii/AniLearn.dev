import { create } from "zustand";

interface SearchBox {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useSearchBox = create<SearchBox>()((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false });
  },
}));

interface MenuBar {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMenuBar = create<MenuBar>()((set) => ({
  isOpen: false,
  onOpen: () => {
    set({ isOpen: true });
  },
  onClose: () => {
    set({ isOpen: false });
  },
}));

export { useSearchBox, useMenuBar };
