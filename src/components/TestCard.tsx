
import React from "react";

interface TestCardProps {
  imgSrc: string;
  title: string;
  desc: string;
  className?: string;
}

const TestCard: React.FC<TestCardProps> = ({ imgSrc, title, desc, className }) => {
  return (
    <div className={`bg-white rounded-xl shadow group hover:shadow-lg transition-shadow overflow-hidden flex flex-col ${className || ""}`}>
      <img
        src={imgSrc}
        alt={title}
        className="h-40 w-full object-cover"
        loading="lazy"
        />
      <div className="p-4 flex-1 flex flex-col">
        <div className="font-semibold text-base mb-1 truncate">{title}</div>
        <div className="text-sm text-muted-foreground flex-1">{desc}</div>
      </div>
    </div>
  );
};

export default TestCard;
