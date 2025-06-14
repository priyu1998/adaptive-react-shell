
import React from "react";
import { MapPin } from "lucide-react";

export default function LocationPicker({ className }) {
  // Placeholder location state
  const [location, setLocation] = React.useState("Select Location");

  // Handle location click (for now, just cycles through sample cities)
  const cities = ["New York", "Los Angeles", "Mumbai", "Bangalore"];
  const handleClick = () => {
    setLocation(prev =>
      prev === "Select Location"
        ? cities[0]
        : cities[(cities.indexOf(prev) + 1) % cities.length]
    );
  };

  return (
    <button
      className={
        "flex items-center gap-1 px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-accent transition " +
        (className || "")
      }
      onClick={handleClick}
      aria-label="Select location"
      type="button"
    >
      <MapPin size={20} className="text-primary" />
      <span className="max-w-[100px] truncate">{location}</span>
      <span className="pl-1 text-xs text-muted-foreground">&#x25BE;</span>
    </button>
  );
}
