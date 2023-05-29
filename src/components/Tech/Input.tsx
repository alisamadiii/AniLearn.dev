import React from "react";

type Props = {
  name: string;
  value: string | number;
  unit: string;
  onChange: (a: any) => void;
};

export default function Input({ name, value, unit, ...otherProps }: Props) {
  return (
    <label className="flex items-center gap-2 p-3 mt-4 border rounded-md bg-box/70 border-white-low-opacity hover:focus-within:bg-box">
      {name}:
      <input
        type="number"
        className="w-12 px-1 rounded outline-none bg-background-clr"
        value={value}
        {...otherProps}
      />
      {unit}
    </label>
  );
}
