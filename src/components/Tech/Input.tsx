import React, { useEffect } from "react";

type Props = {
  name: string;
  value: number;
  eResize: boolean;
  setValue?: (a: any) => void;
  increaseFactor?: number;
  unit?: string;
  onChange: (a: any) => void;
};

export default function Input({ name, value, unit, eResize, setValue, increaseFactor = 1, ...props }: Props) {
  const handleDrag = (startX: any, event: any) => {
    if (eResize) {
      const offsetX = event.clientX - startX;
      const offsetSign = Math.sign(offsetX);
      const offsetAmount = Math.abs(offsetX);
      const newNumber = offsetSign > 0 ? value + offsetAmount * increaseFactor : value - offsetAmount * increaseFactor;
      if (value % 1 !== 0) {
        setValue!(newNumber.toFixed(2));
      } else {
        setValue!(newNumber);
      }
    }
  };

  useEffect(() => {
    if (value < 0) setValue(0);
  }, [value]);

  return (
    <label
      onMouseDown={(event) => {
        const startX = event.clientX;

        const handleMouseMove = handleDrag.bind(null, startX);
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", () => {
          document.removeEventListener("mousemove", handleMouseMove);
        });
      }}
      className="flex items-center gap-2 p-3 mt-4 border rounded-md select-none bg-box/70 dark:bg-box-d/70 border-white-low-opacity dark:border-white-low-opacity-d focus-within:bg-box dark:focus-within:bg-box-d hover:cursor-e-resize">
      {name}:
      <input
        type="number"
        className="w-12 px-1 rounded outline-none bg-background-clr dark:bg-background-clr-d"
        value={value}
        {...props}
      />
      {unit}
    </label>
  );
}
