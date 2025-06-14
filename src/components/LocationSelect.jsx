
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

const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
  "Philadelphia"
];

export default function LocationSelect({ className = "" }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(cities[0]);
  const [input, setInput] = React.useState("");

  const handleSelect = (selected) => {
    setValue(selected);
    setInput(selected);
    setOpen(false);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setValue(e.target.value);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={
            `flex items-center gap-2 rounded-full px-5 py-2 font-medium border border-primary bg-white text-primary hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary transition shadow-sm max-w-full truncate ` +
            className
          }
          aria-label="Choose location"
          style={{
            minWidth: 150
          }}
        >
          <MapPin size={18} className="text-primary" />
          <span className="truncate">{value || "Select location"}</span>
          <ChevronsUpDown size={16} className="ml-2 text-primary/70" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="p-0 w-[250px] max-w-xs rounded-xl"
        style={{ zIndex: 30 }}
        align="center"
      >
        <Command>
          <div className="flex items-center px-3 pt-2 pb-1">
            <CommandInput
              placeholder="Type location…"
              value={input}
              onInput={handleInputChange}
              className="bg-transparent border-none focus:ring-0 focus:outline-none text-base placeholder:text-muted-foreground"
              autoFocus
            />
          </div>
          <CommandList>
            <CommandEmpty>
              <div className="px-3 py-2 text-muted-foreground text-sm">No locations found.</div>
            </CommandEmpty>
            {[...cities.filter((s) =>
              !input ||
              s.toLowerCase().includes(input.toLowerCase())
            )].map((city) => (
              <CommandItem
                key={city}
                value={city}
                onSelect={() => handleSelect(city)}
                className={
                  "cursor-pointer rounded px-3 py-2 my-0.5 text-base capitalize aria-selected:bg-primary/10"
                }
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
                  className="cursor-pointer rounded px-3 py-2 my-0.5 text-base text-primary"
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

