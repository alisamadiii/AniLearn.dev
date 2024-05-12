import React, { type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export default function Radio({ ...props }: Props) {
  return (
    <div>
      <input type="radio" className="peer hidden" {...props} />
      <span className="border-border bg-box relative flex h-4 w-4 items-center justify-center rounded-full border duration-100 before:absolute before:h-1/2 before:w-1/2 before:rounded-full before:bg-background peer-checked:border-blue-900 peer-checked:bg-blue-700" />
    </div>
  );
}
