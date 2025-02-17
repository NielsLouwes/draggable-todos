import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeFirstLetter = (userInput: string) => {
  const capitaliseFirstLetter = userInput.charAt(0).toUpperCase();
  const restOfInput = userInput.slice(1);
  return `${capitaliseFirstLetter}${restOfInput}`;
};
