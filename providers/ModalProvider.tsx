"use client";

import React, { useEffect, useState } from "react";

import { SearchContainer } from "@/components/search-panel";

export default function ModalProvider() {
  const [isMountain, setIsMountain] = useState(false);

  useEffect(() => {
    setIsMountain(true);
  }, [isMountain]);

  if (!isMountain) {
    return null;
  }

  return (
    <>
      <SearchContainer />
    </>
  );
}
