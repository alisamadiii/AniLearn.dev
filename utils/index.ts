import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// this function is for reusable components, e.g buttons
function cn(...inputs: ClassValue[]): any {
  return twMerge(clsx(inputs));
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function gettingSearchParams(searchParams: any, value: string) {
  return new URLSearchParams(Array.from(searchParams.entries())).get(value);
}

function extractNumbersFromString(str: string) {
  // Use regular expression to match all numbers, including negative numbers
  const numbers = str.match(/-?\d+/g);

  // If numbers are found, convert them to integers
  if (numbers) {
    return numbers.map(Number);
  } else {
    return [];
  }
}

export { cn, formatTime, gettingSearchParams, extractNumbersFromString };
