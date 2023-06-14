import { ReactNode, createContext, useState } from "react";

type NavbarContextTypes = {
  isNavbarOpen: boolean;
  setIsNavbarOpen: (a: boolean) => void;
};

export const NavbarContext = createContext<NavbarContextTypes>({
  isNavbarOpen: false,
  setIsNavbarOpen: () => {},
});

type NavbarProps = {
  children: ReactNode;
};

export const NavbarProvider = ({ children }: NavbarProps) => {
  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

  const value = { isNavbarOpen, setIsNavbarOpen };
  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};
