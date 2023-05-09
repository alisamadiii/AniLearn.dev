import React from "react";

type Props = {
  maxNum: number;
  filterName: string;
  value: number;
  onChange: (e: any) => void;
};

export const Range = ({ maxNum, filterName, value, ...otherProps }: Props) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="basis-[200px]">{filterName}</p>
      <div className="grow basis-[500px] range-slider">
        <input
          className="range-slider__range"
          type="range"
          name={filterName}
          value={value}
          max={maxNum}
          {...otherProps}
        />
        <span className="range-slider__value">{(value * 0.01).toFixed(2)}</span>
      </div>
    </div>
  );
};
