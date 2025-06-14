import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
} from "@/components/ui/command";
import { MapPin, ChevronsUpDown } from "lucide-react";

// Example locations - you can expand this as needed
const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia"
];

// Bubble style for trigger and dropdown content
export default function LocationSelect({ className = "" }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(cities[0]);
  const [input, setInput] = React.useState(cities[0]);

  // Select city or custom input
  const handleSelect = (selected) => {
    setValue(selected);
    setInput(selected);
    setOpen(false);
  };

  // Keep input and value in sync for user typing
  const handleInputChange = (e) => {
    setInput(e.target.value);
    setValue(e.target.value);
  };

  // Improved design: rounded pill, shadow, clear focus, colors
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={
            "flex items-center gap-2 rounded-full px-5 py-2 font-medium border border-primary/20 bg-white text-primary shadow-md hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/60 transition max-w-full truncate " 
            + className
          }
          aria-label="Choose location"
          style={{
            minWidth: 150,
            boxShadow: open
              ? "0 6px 24px 0 rgba(26,148,229,0.12)"
              : "0 1px 4px 0 rgba(26,148,229,0.08)",
            borderWidth: open ? 2 : 1,
          }}
        >
          <MapPin size={18} className="text-primary" />
          <span className="truncate font-semibold">{value || "Select location"}</span>
          <ChevronsUpDown size={16} className="ml-2 text-primary/70" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-[260px] max-w-xs rounded-2xl border border-primary/30 bg-white shadow-lg"
        align="center"
        side="bottom"
        sideOffset={8}
        style={{
          zIndex: 50, // Stay above popovers
          boxShadow: "0 10px 36px 0 rgba(26,148,229,0.13)"
        }}
      >
        <Command>
          <div className="flex items-center px-4 pt-3 pb-2">
            <CommandInput
              placeholder="Type location…"
              value={input}
              onInput={handleInputChange}
              className="bg-[#f8fbfd] border rounded-full px-4 py-2 w-full flex-1 text-base placeholder:text-primary/40 focus:ring-2 focus:ring-primary/20 focus:outline-none"
              autoFocus
            />
          </div>
          <CommandList>
            <CommandEmpty>
              <div className="px-4 py-2 text-muted-foreground text-sm">No locations found.</div>
            </CommandEmpty>
            {cities
              .filter(
                (city) =>
                  !input ||
                  city.toLowerCase().includes(input.toLowerCase())
              )
              .map((city) => (
                <CommandItem
                  key={city}
                  value={city}
                  onSelect={() => handleSelect(city)}
                  className="cursor-pointer rounded-lg px-4 py-2 my-1 text-base capitalize aria-selected:bg-primary/10 transition-all hover:bg-primary/10"
                >
                  {city}
                </CommandItem>
              ))}
            {input &&
              !cities.some(
                (city) => city.toLowerCase() === input.toLowerCase()
              ) && (
                <CommandItem
                  value={input}
                  onSelect={() => handleSelect(input)}
                  className="cursor-pointer rounded-lg px-4 py-2 my-1 text-base text-primary font-semibold transition-all hover:bg-primary/10"
                >
                  + Use “{input}”
                </CommandItem>
              )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
