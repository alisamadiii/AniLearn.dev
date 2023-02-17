export type TestimonialTypes = {
  id?: string;
  name: string;
  headline: string | null;
  img: string | null;
  star: number | null;
  testimonial: string;
  homePage: boolean;
  order: number;
  testimonialPage: boolean;
}[];

export type OneTestimonial = {
  id?: string;
  name: string;
  headline: string | null;
  img: string | null;
  star: number | null;
  testimonial: string;
  homePage: boolean;
  order: number;
  testimonialPage: boolean;
};
