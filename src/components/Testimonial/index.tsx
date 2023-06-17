import Image from "next/image";
import React from "react";
import { TestimonialProps } from "./index.types";

export default function Testimonial({ testimonial }: TestimonialProps) {
  const { id, name, testimonial: feedback, headline, image } = testimonial;
  const Icon = testimonial.from[0];
  const SocialMedia = testimonial.from[1];

  return (
    <div className="relative flex flex-col gap-8 p-4 overflow-hidden duration-200 border rounded-lg shadow-lg border-white-low-opacity dark:border-white-low-opacity-d bg-box dark:bg-box-d isolate grow basis-72 hover:text-white hover:-translate-y-2 hover:rotate-1 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary before:to-secondary before:-z-10 before:opacity-0 hover:before:opacity-100 before:duration-200">
      <p>{feedback}</p>
      <div className="flex items-center gap-2 mt-auto font-medium">
        <div className="relative">
          <Image
            src={image}
            width={100}
            height={100}
            alt={`image - ${name}`}
            className="object-cover w-8 h-8 rounded-full"
          />
          <Icon
            className={`absolute bottom-0 right-0 text-lg translate-x-1 translate-y-1 ${
              SocialMedia == "twitter" ? "text-twitter" : "text-linkedin"
            }`}
          />
        </div>
        <div>
          <h3 className="text-base/4">{name}</h3>
          {headline && <p className="text-xs">{headline}</p>}
        </div>
      </div>
    </div>
  );
}
