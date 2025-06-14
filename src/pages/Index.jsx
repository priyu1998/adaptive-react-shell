import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestCard from "@/components/TestCard";
import { Button } from "@/components/ui/button";
import React from "react";
import { Search } from "lucide-react";

const topTests = [
  {
    imgSrc: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd7e?auto=format&fit=crop&w=500&q=80",
    title: "Comprehensive Blood Test",
    desc: "Get a detailed analysis of your blood health."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    title: "Advanced Imaging Scan",
    desc: "High-resolution imaging for accurate diagnosis."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1588776814546-ec7e187f8dc5?auto=format&fit=crop&w=500&q=80",
    title: "Full Body Health Check",
    desc: "Complete health assessment for peace of mind."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1434828927397-62ea053f7a35?auto=format&fit=crop&w=500&q=80",
    title: "Allergy Screening Package",
    desc: "Identify and manage your allergies effectively."
  },
];

const popularTests = [
  {
    imgSrc: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80",
    title: "Thyroid Function Test",
    desc: "Assess your thyroid health."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
    title: "Vitamin D Level Check",
    desc: "Check your vitamin D levels."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=format&fit=crop&w=500&q=80",
    title: "Liver Function Panel",
    desc: "Evaluate your liver health."
  },
  {
    imgSrc: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=500&q=80",
    title: "Kidney Function Assessment",
    desc: "Monitor your kidney function."
  },
];

const cityChips = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia"];
const categoryChips = ["Cardiology", "Neurology", "Oncology", "Pediatrics", "Orthopedics", "Gastroenterology"];
const filterChips = ["Blood Tests", "Imaging", "Packages", "All Tests"];

const Chip = ({ text, selected, onClick }) => (
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

export default function Index() {
  const [search, setSearch] = React.useState("");
  const [selectedFilter, setSelectedFilter] = React.useState("All Tests");

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      {/* margins: xs=px-3, sm=px-6, md=px-14, lg=px-28, xl=px-40. maxW stays at 1400px */}
      <main className="flex-1 mx-auto w-full max-w-[1400px] px-3 sm:px-6 md:px-14 lg:px-28 xl:px-40 pt-6">
        {/* Centered Search Bar */}
        <form
          className="flex flex-col items-center my-8"
          onSubmit={e => { e.preventDefault(); }}
        >
          <div className="w-full max-w-3xl">
            <div className="flex items-center px-5 py-3 rounded-xl bg-[#f4f6f8] focus-within:ring-2 focus-within:ring-[#1A94E5] shadow-sm transition relative">
              <Search className="text-muted-foreground mr-2" size={22} />
              <input
                className="flex-1 bg-transparent outline-none border-none text-base"
                type="search"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Search for tests, packages or labs"
              />
            </div>

            {/* Filter tags below searchbar */}
            <div className="flex flex-wrap gap-3 mt-4">
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

        {/* Top Featured Tests */}
        <div>
          <div className="flex justify-between items-center mb-2 mt-2">
            <h2 className="text-xl md:text-2xl font-bold">Top Tests & Packages</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {topTests.map((test) => (
              <TestCard
                key={test.title}
                imgSrc={test.imgSrc}
                title={test.title}
                desc={test.desc}
              />
            ))}
          </div>
        </div>

        {/* Popular Tests */}
        <div>
          <div className="flex justify-between items-center mb-2 mt-8">
            <h2 className="text-xl md:text-2xl font-bold">Popular Tests</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
            {popularTests.map((test) => (
              <TestCard
                key={test.title}
                imgSrc={test.imgSrc}
                title={test.title}
                desc={test.desc}
              />
            ))}
          </div>
        </div>

        {/* Tests by City */}
        <div className="mt-4 mb-2">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Tests by City</h3>
          <div className="flex flex-wrap gap-2">
            {cityChips.map(c => (
              <Chip key={c} text={c} />
            ))}
          </div>
        </div>

        {/* Tests by Category */}
        <div className="mt-6 mb-10">
          <h3 className="text-lg md:text-xl font-semibold mb-2">Tests by Category</h3>
          <div className="flex flex-wrap gap-2">
            {categoryChips.map(c => (
              <Chip key={c} text={c} />
            ))}
          </div>
        </div>

        {/* Partner Section */}
        <div className="w-full mt-14 flex flex-col items-center justify-center text-center py-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Partner with HealthCheck
          </h2>
          <p className="text-muted-foreground mb-4 max-w-xl">
            Expand your reach and grow your business by partnering with us.
          </p>
          <Button className="px-8 py-2 text-base font-semibold">
            Become a Partner
          </Button>
        </div>
        
        {/* Help Center Section */}
        <div className="w-full mt-6 flex flex-col items-center justify-center text-center py-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Learn More About Health Tests
          </h2>
          <p className="text-muted-foreground mb-4 max-w-xl">
            Find answers to common questions about health tests and procedures.
          </p>
          <Button variant="outline" className="px-8 py-2 text-base font-semibold">
            Visit Our Help Center
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
