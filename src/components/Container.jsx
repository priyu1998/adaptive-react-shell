
import React from "react";

// Responsive left/right margin container. Add extra classes with `className`.
// Increased px for larger side margins on all screen sizes.
export default function Container({ children, className = "" }) {
  return (
    <div
      className={
        "mx-auto w-full max-w-[1400px] px-6 sm:px-12 md:px-24 lg:px-36 xl:px-52 " +
        className
      }
    >
      {children}
    </div>
  );
}
