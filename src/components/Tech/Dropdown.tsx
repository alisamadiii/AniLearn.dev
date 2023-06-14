import React, { useState } from "react";

type Props = {
  name: string;
  lists: any[];
  unit: string | null;
  stateValue: any;
  setStateValue: (a: any) => void;
};

import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({
  name,
  lists,
  unit = null,
  stateValue,
  setStateValue,
}: Props) {
  const [isOpen, setOpen] = useState(false);

  const toggleList = () => {
    setOpen(!isOpen);
  };

  const onClickHandler = (value: any) => {
    setStateValue(value);
    setOpen(!isOpen);
  };

  return (
    <div className="relative inline-block mb-3">
      <button
        className="flex items-center w-full gap-4 px-2 py-1 text-left capitalize border rounded-md bg-box border-white-low-opacity"
        onClick={toggleList}
      >
        {name}
        <IoIosArrowDown className={`${isOpen ? "rotate-0" : "rotate-180"}`} />
      </button>
      {isOpen && (
        <ul className="absolute z-20 w-full p-1 mt-2 border rounded-md bg-box border-white-low-opacity">
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
        </ul>
      )}
    </div>
  );
}
