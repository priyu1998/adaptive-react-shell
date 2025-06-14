
import React from "react";

// Responsive left/right margin container. Add extra classes with `className`.
// Updated for better mobile responsiveness
export default function Container({ children, className = "" }) {
  return (
    <div
      className={
        "mx-auto w-full max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 " +
        className
      }
    >
      {children}
    </div>
  );
}
