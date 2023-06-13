export type NavbarTechProps = {
  isNavbar: boolean;
  setIsNavbar: (a: boolean) => void;
};

export type LinksProps = {
  tech: {
    id: number;
    name: string;
    link: string;
  }[];
  techName: string;
};
