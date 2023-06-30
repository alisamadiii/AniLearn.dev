import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function activateButton(state: any, value: any) {
  return state == value ? "after:opacity-100 shadow-main-button text-white" : "after:opacity-0 opacity-75 scale-95";
}
