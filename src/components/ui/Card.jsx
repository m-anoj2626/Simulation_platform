import React from "react";
import clsx from "clsx";

/**
 * A reusable Card component with rounded corners, border, and shadow.
 * Supports hover effects and accepts custom class names.
 */
export const Card = ({ children, className = "", hoverable = true }) => {
  return (
    <div
      className={clsx(
        "rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300",
        {
          "hover:shadow-md hover:scale-[1.02]": hoverable,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * CardContent wraps the inner content of a Card with consistent padding.
 */
export const CardContent = ({ children, className = "" }) => {
  return (
    <div className={clsx("p-6 md:p-8", className)}>
      {children}
    </div>
  );
};
