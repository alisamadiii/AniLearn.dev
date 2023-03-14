import { navbarSelector } from "@/redux/general/general.selector";
import { GENERAL_TYPES } from "@/redux/general/general.types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
};

export default function AsideContent({ children }: Props) {
  const navSelector = useSelector(navbarSelector);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        if (navSelector == true) {
          dispatch({
            type: GENERAL_TYPES.navbar,
            payload: navSelector == true && false,
          });
        }
      }}
      className={`bg-white h-screen ${
        navSelector ? "translate-x-52" : "translate-x-0"
      } duration-300`}
    >
      {children}
    </div>
  );
}
