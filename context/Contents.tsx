import React, { createContext, useState } from "react";

interface IValueTypes {
  isContentOpen: boolean;
  setIsContentOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ContentsContext = createContext<IValueTypes>({
  isContentOpen: false,
  setIsContentOpen: () => {},
});

type ProviderTypes = {
  children: React.ReactNode;
};

export const ContentsProvider = ({ children }: ProviderTypes) => {
  const [isContentOpen, setIsContentOpen] = useState<boolean>(false);

  const value = { isContentOpen, setIsContentOpen };

  return (
    <ContentsContext.Provider value={value}>
      {children}
    </ContentsContext.Provider>
  );
};
