
import React from "react";
import { Search } from "lucide-react";

const filterChips = ["Blood Tests", "Imaging", "Packages", "All Tests"];

function Chip({ text, selected, onClick }) {
  return (
    <button
      className={
        "rounded-full px-4 py-1 text-sm font-medium border transition-colors " +
        (selected
          ? "bg-[#1A94E5] text-white border-[#1A94E5]"
          : "bg-muted text-foreground border-transparent hover:border-muted-foreground hover:bg-muted/80")
      }
      onClick={onClick}
      type="button"
      style={{ minWidth: 96, marginBottom: 4 }}
    >
      {text}
    </button>
  );
}

export default function SearchBarWithFilters({ search, setSearch, selectedFilter, setSelectedFilter }) {
  return (
    <form
      className="flex flex-col items-center my-8"
      onSubmit={e => { e.preventDefault(); }}
    >
      <div className="w-[95%] sm:w-4/5 lg:w-4/5 mx-auto">
        {/* Modern search container */}
        <div className="flex items-center px-6 py-4 rounded-2xl bg-white border border-[#e3e8ef] focus-within:ring-2 focus-within:ring-[#1A94E5] shadow-lg transition relative mb-2">
          <Search className="text-muted-foreground mr-3" size={26} />
          <input
            className="flex-1 bg-transparent outline-none border-none text-base sm:text-lg placeholder:text-[#b1b6be] px-2"
            type="search"
            placeholder="Search for tests, packages or labs"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search for tests, packages or labs"
            style={{ minHeight: 40 }}
          />
        </div>

        <div className="flex flex-wrap gap-3 mt-5 justify-center">
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
