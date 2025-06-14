
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
      <div className="w-full flex justify-center">
        {/* Search bar: centered, max-w-4xl, full width on mobile, big shadow, large rounded */}
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-md py-6 px-2 md:px-8 flex flex-col items-center">
          <input
            className="w-full bg-transparent text-lg md:text-2xl text-muted-foreground rounded-lg px-6 py-5 border-none outline-none transition focus:ring-2 focus:ring-[#1A94E5] mb-6 placeholder:text-muted-foreground"
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
