import React from "react";

type Props = {};

export default function FormError({}: Props) {
  return (
    <ul className="pl-8 text-sm list-disc">
      <li>
        Name<span className="text-red-700">*</span>
      </li>
      <li>
        Testimonial<span className="text-red-700">*</span>
      </li>
    </ul>
  );
}
