import React, { forwardRef } from "react";

// Simple class merging utility (replace this if you're not using `cn`)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Input = forwardRef((props, ref) => {
  const { className, type = "text", ...rest } = props;

  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...rest}
    />
  );
});

Input.displayName = "Input";

export { Input };
