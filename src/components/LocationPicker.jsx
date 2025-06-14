
import React from "react";
import { MapPin } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

const cities = [
  "New York",
  "Los Angeles",
  "Mumbai",
  "Bangalore",
  "Delhi",
  "San Francisco",
  "London",
  "Chennai",
];

export default function LocationPicker({ className }) {
  const [location, setLocation] = React.useState("Select Location");
  const [input, setInput] = React.useState("");
  const [open, setOpen] = React.useState(false);

  // Filtered city list for the user input
  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(input.toLowerCase())
  );

  function handleSelectCity(city) {
    setLocation(city);
    setInput("");
    setOpen(false);
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={
            "flex items-center gap-1 px-4 py-2 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-accent transition " +
            (className || "")
          }
          aria-label="Select location"
          type="button"
        >
          <MapPin size={20} className="text-primary" />
          <span className="max-w-[100px] truncate">{location}</span>
          <span className="pl-1 text-xs text-muted-foreground">&#x25BE;</span>
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-3" align="center">
        <div>
          <input
            type="text"
            placeholder="Type a city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full mb-2 px-3 py-2 rounded border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
            autoFocus
          />
          <div className="max-h-40 overflow-auto">
            {filteredCities.length === 0 ? (
              <div className="text-xs text-muted-foreground text-center py-2">
                No results found
              </div>
            ) : (
              filteredCities.map((city) => (
                <button
                  key={city}
                  className="w-full text-left px-3 py-2 rounded hover:bg-muted transition text-foreground text-sm"
                  onClick={() => handleSelectCity(city)}
                  type="button"
                >
                  {city}
                </button>
              ))
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
