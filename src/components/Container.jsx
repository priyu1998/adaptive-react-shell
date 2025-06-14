
import React from "react";

// Responsive left/right margin container. Add extra classes with `className`.
export default function Container({ children, className = "" }) {
  return (
    <div className={
      "mx-auto w-full max-w-[1400px] px-3 sm:px-6 md:px-14 lg:px-28 xl:px-40 " +
      className
    }>
      {children}
    </div>
  );
}
