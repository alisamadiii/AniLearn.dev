import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// this function is for reusable components, e.g buttons
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const techs = ["html", "css", "js"];

export const showcaseImage =
  "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
