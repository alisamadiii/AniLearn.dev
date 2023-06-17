import React from "react";

type Props = {
  name: string;
  value: string | number;
  unit: string;
  onChange: (a: any) => void;
};

export default function Input({ name, value, unit, ...otherProps }: Props) {
  return (
    <label className="flex items-center gap-2 p-3 mt-4 border rounded-md bg-box/70 dark:bg-box-d/70 border-white-low-opacity dark:border-white-low-opacity-d focus-within:bg-box dark:focus-within:bg-box-d">
      {name}:
      <input
        type="number"
        className="w-12 px-1 rounded outline-none bg-background-clr dark:bg-background-clr-d"
        value={value}
        {...otherProps}
      />
      {unit}
    </label>
  );
}
