import React from "react";

type Props = {
  title: string;
  value: string;
  placeHolder: string;
  type: string;
  onChange: (e: any) => void;
};

export default function Input({
  title,
  value,
  placeHolder,
  type,
  ...otherProps
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={value} className="text-sm text-[#575757]">
        {title}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        id={value}
        name={value}
        className="text-sm p-2 outline-none border-2 border-[#CFCFCF] rounded-md focus:border-black"
        {...otherProps}
      />
    </div>
  );
}
