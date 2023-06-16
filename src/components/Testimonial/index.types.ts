import { IconType } from "react-icons";

export type TestimonialProps = {
  testimonial: {
    id: number;
    name: string;
    headline: string | null;
    image: string;
    testimonial: string;
    from: [IconType, "twitter" | "linkedin"];
  };
};

export type TestimonialTypes = {
  id: number;
  name: string;
  headline: string | null;
  image: string;
  testimonial: string;
  from: [IconType, "twitter" | "linkedin"];
};
