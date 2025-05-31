import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseIMGURL = process.env.NEXT_PUBLIC_BASE_IMG_URL;
export const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
