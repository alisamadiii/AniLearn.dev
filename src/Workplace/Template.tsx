import React from "react";
import Workplace, { LiveChanges, BringChanges } from ".";

type Props = {};

export default function Template({}: Props) {
  return (
    // All your code must be inside the Workplace for writing a clean codes
    // You can utility classes. (optional)

    <Workplace className="">
      <LiveChanges className="">
        {/* This is the place where you can see your changes live */}
      </LiveChanges>
      <BringChanges className="">
        {/* This is the place where you can add your setting to change your items, e.g: buttons, ranges and more */}
      </BringChanges>
    </Workplace>
  );
}
