
import React from "react";
import { Search } from "lucide-react";

const filterChips = ["Blood Tests", "Imaging", "Packages", "All Tests"];

function Chip({ text, selected, onClick }) {
  return (
    <button
      className={
        "rounded-full px-3 py-1 text-sm font-medium border transition-colors " +
        (selected
          ? "bg-[#1A94E5] text-white border-[#1A94E5]"
          : "bg-muted text-foreground border-transparent hover:border-muted-foreground hover:bg-muted/80")
      }
      onClick={onClick}
      type="button"
      style={{ minWidth: 80, marginBottom: 4 }}
    >
      {text}
    </button>
  );
}

export default function SearchBarWithFilters({ search, setSearch, selectedFilter, setSelectedFilter }) {
  return (
    <form
      className="flex flex-col items-center my-6 sm:my-8"
      onSubmit={e => { e.preventDefault(); }}
    >
      <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4">
        <div className="flex items-center px-4 sm:px-5 py-3 rounded-xl bg-[#f4f6f8] focus-within:ring-2 focus-within:ring-[#1A94E5] shadow-sm transition relative">
          <Search className="text-muted-foreground mr-2" size={20} />
          <input
            className="flex-1 bg-transparent outline-none border-none text-base"
            type="search"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search for tests, packages or labs"
          />
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 justify-center sm:justify-start">
          {filterChips.map(c => (
            <Chip
              key={c}
              text={c}
              selected={selectedFilter === c}
              onClick={() => setSelectedFilter(c)}
            />
          ))}
        </div>
      </div>
    </form>
  );
}
