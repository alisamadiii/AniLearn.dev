import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  name: string;
  lists: any[];
  unit?: string | null;
  stateValue: any;
  setStateValue: (a: any) => void;
  margin: boolean;
};

import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({
  name,
  lists,
  unit = null,
  stateValue,
  setStateValue,
  margin,
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
        className="flex items-center w-full gap-4 px-2 py-1 text-left capitalize border rounded-md bg-box border-white-low-opacity"
        onClick={toggleList}
      >
        {name}
        <IoIosArrowDown
          className={`duration-200 ${isOpen ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            ref={dropdownRef}
            className="absolute z-20 w-full p-1 mt-2 border rounded-md bg-box border-white-low-opacity"
          >
            {lists.map((list, index) => (
              <li
                key={index}
                className={`px-2 py-1 rounded-md cursor-pointer hover:bg-white-low-opacity ${
                  stateValue == list && "bg-white-low-opacity"
                }`}
                onClick={() => onClickHandler(list)}
              >
                {list} {unit && unit}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
