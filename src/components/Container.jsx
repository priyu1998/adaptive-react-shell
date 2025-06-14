
import React from "react";

// Responsive left/right margin container. Add extra classes with `className`.
// Optimized for all screen sizes with proper responsive padding
export default function Container({ children, className = "" }) {
  return (
    <div
      className={
        "mx-auto w-full max-w-[1400px] px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 " +
        className
      }
    >
      {children}
    </div>
  );
}
