import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type Props = {
  name: string;
  lists: any[];
  unit?: string | null;
  stateValue: any;
  setStateValue: (a: any) => void;
  margin: boolean;
  subListClassName?: string;
};

import { RxCaretSort } from "react-icons/rx";
import { BsCheck } from "react-icons/bs";

export default function Dropdown({
  name,
  lists,
  unit = null,
  stateValue,
  setStateValue,
  margin,
  subListClassName
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const onClickHandler = (value: any) => {
    setStateValue(value);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block ${margin && "mb-3"}`}>
      <button
        className="flex items-center w-full px-2 py-1 text-left capitalize duration-150 border rounded-md playground__background focus:ring-2 ring-white/40"
        onClick={toggleList}>
        {name} : <span className="ml-2 text-sm opacity-80">{stateValue}</span>
        <RxCaretSort className={`ml-4`} />
      </button>
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0.5, y: -3 }}
          animate={{ opacity: 1, y: 0 }}
          ref={dropdownRef}
          className={twMerge(
            "absolute z-20 w-full p-1 mt-2 overflow-auto border rounded-md playground__background max-h-60 space-y-1",
            subListClassName
          )}>
          {lists.map((list, index) => (
            <li
              key={index}
              className={`flex items-center justify-between px-2 py-[2px] rounded-md cursor-pointer hover:bg-white-low-opacity ${
                stateValue == list && "bg-white-low-opacity dark:bg-white-low-opacity-d"
              }`}
              onClick={() => onClickHandler(list)}>
              {list} {unit && unit}{" "}
              {stateValue == list && (
                <span>
                  <BsCheck />
                </span>
              )}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
