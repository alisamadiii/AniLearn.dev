import Image from "next/image";
import React from "react";

type Props = {
  testimonial: {
    num: number;
    headline: string | null;
    from: string;
    message: string;
    image: string;
    star: number;
  };
};

export default function Testimonial({ testimonial }: Props) {
  return (
    <div className="w-full p-4 rounded-md bg-slate-100">
      <div className="flex items-center gap-2 mb-3">
        <Image
          src={testimonial.image}
          width={70}
          height={70}
          alt=""
          className="w-12 rounded-full"
        />
        <div>
          <h2 className="font-semibold leading-3">{testimonial.from}</h2>
          <small>{testimonial.headline}</small>
        </div>
      </div>
      <p>{testimonial.message}</p>
    </div>
  );
}
