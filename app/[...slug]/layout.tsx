import React from "react";

import LeftNavbarItems from "./left-navbar";

interface Props {
  children: React.ReactNode;
}

export default function ContentLayout({ children }: Props) {
  return (
    <div className="mx-auto mt-32 grid max-w-7xl grid-cols-5 gap-8">
      <nav className="">
        <LeftNavbarItems techs="HTML" />
        <LeftNavbarItems techs="CSS" />
        <LeftNavbarItems techs="JavaScript" />
      </nav>
      <div className="col-span-3">{children}</div>
      <div className="bg-purple-900"></div>
    </div>
  );
}
