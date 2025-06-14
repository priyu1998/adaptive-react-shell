
import React from "react";

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
      {/* Outermost container for background, padding, and rounded corners */}
      <div className="flex justify-center w-full">
        {/* Make search bar 100vw on mobile, 70% on desktop */}
        <div className="w-full lg:w-[70%] bg-[#f4f7fb] rounded-2xl py-10 px-2 md:px-8 flex flex-col items-center">
          <input
            className="w-full bg-white text-lg md:text-xl text-muted-foreground rounded-lg px-6 py-4 border-none outline-none shadow transition focus:ring-2 focus:ring-[#1A94E5] mb-6"
            type="search"
            placeholder="Search for tests, labs, or packages"
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search for tests, packages or labs"
          />

          {/* Filter chips centered beneath the input */}
          <div className="flex flex-wrap gap-8 justify-center mt-2">
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
      </div>
    </form>
  );
}
