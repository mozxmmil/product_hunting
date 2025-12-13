import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` combines classnames (like `clsx`) and resolves Tailwind conflicts via `twMerge`.
 * Usage: `cn("px-2", condition && "text-red-500", extra)`
 */
export function cn(...inputs: any[]) {
  return twMerge(clsx(...inputs));
}

export default cn;
