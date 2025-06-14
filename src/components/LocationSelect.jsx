
import React from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia",
];

export default function LocationSelect({ className }) {
  const [selected, setSelected] = React.useState(cities[0]);
  return (
    <Select value={selected} onValueChange={setSelected}>
      <SelectTrigger
        className={`rounded-full px-5 py-2 font-medium border border-primary bg-white text-primary hover:bg-primary/10 transition ${className || ""}`}
        style={{
          minWidth: 150,
        }}
        aria-label="Choose location"
      >
        <SelectValue placeholder="Select location" />
      </SelectTrigger>
      <SelectContent>
        {cities.map((city) => (
          <SelectItem
            key={city}
            value={city}
            className="rounded-full capitalize"
          >
            {city}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
