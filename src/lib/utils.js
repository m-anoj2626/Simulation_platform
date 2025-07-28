import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names safely and merges conflicting Tailwind classes.
 * Example: cn("p-2", "p-4") → "p-4"
 */
export function cn(...classes) {
  return twMerge(clsx(...classes));
}
