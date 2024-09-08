import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// this function is for reusable components, e.g buttons
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const techs = ["html", "css", "js"];
