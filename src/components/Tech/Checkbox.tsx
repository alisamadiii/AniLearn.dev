import React from "react";

type Props = {
  name: string;
  onChange: (a: any) => void;
  checked?: boolean;
};

export default function Checkbox({ name, ...otherProps }: Props) {
  return (
    <label
      id={name}
      className="flex items-center gap-2 cursor-pointer"
    >
      <div className="toggler-wrapper style-12">
        <input
          type="checkbox"
          id={name}
          {...otherProps}
        />
        <div className="toggler-slider">
          <div className="toggler-knob"></div>
        </div>
      </div>
      {name}
    </label>
  );
}
