import React from "react";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="fixed top-0 left-0 z-[9999] w-full h-screen flex justify-end items-end p-8 pointer-events-none">
      <div className="pswp__preloader__icn">
        <div className="pswp__preloader__cut">
          <div className="pswp__preloader__donut"></div>
        </div>
      </div>
    </div>
  );
}
