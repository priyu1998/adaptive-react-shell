import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestCard from "@/components/TestCard";
import Container from "@/components/Container";
import React from "react";
import { Button } from "@/components/ui/button";

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

function Chip({ text, selected, onClick }) {
  return (
    <button
      className={
        "rounded-full px-2 sm:px-3 md:px-4 py-1 text-xs sm:text-sm font-medium border transition-colors " +
        (selected
          ? "bg-[#1A94E5] text-white border-[#1A94E5]"
          : "bg-muted text-foreground border-transparent hover:border-muted-foreground hover:bg-muted/80")
      }
      onClick={onClick}
      type="button"
      style={{ minWidth: 70, marginBottom: 4 }}
    >
      {text}
    </button>
  );
}

export default function Index() {
  const [search, setSearch] = React.useState("");
  const [selectedFilter, setSelectedFilter] = React.useState("");

  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Main Hero + Search - centered and responsive */}
        <div className="bg-muted/30 pt-6 pb-0 sm:pt-8 sm:pb-0 md:pt-12 md:pb-0">
          <Container>
            {/* Centered Search bar */}
            <form
              className="w-full max-w-3xl mx-auto flex flex-col items-center px-2"
              onSubmit={e => e.preventDefault()}
            >
              <div className="flex items-center w-full px-2 sm:px-4 py-2 sm:py-3 rounded-lg bg-white shadow-sm border border-muted focus-within:ring-2 focus-within:ring-[#1A94E5] transition mb-4 sm:mb-6">
                <svg
                  className="text-muted-foreground mr-2 flex-shrink-0"
                  width={20}
                  height={20}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle cx={11} cy={11} r={8} />
                  <line x1={21} y1={21} x2={16.65} y2={16.65} />
                </svg>
                <input
                  className="flex-1 bg-transparent outline-none border-none text-sm sm:text-base"
                  type="search"
                  placeholder="Search for tests, packages or labs"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  aria-label="Search for tests, packages or labs"
                />
              </div>
            </form>
            {/* Chips below search */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-2 sm:mb-4">
              {["Blood Tests", "Imaging", "Packages", "All Tests"].map(filter => (
                <button
                  key={filter}
                  className={
                    "rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium border bg-white hover:bg-[#1A94E5] hover:text-white hover:border-[#1A94E5] transition-colors"
                  }
                  type="button"
                  onClick={() => setSelectedFilter(filter)}
                  style={{
                    ...(selectedFilter === filter
                      ? { backgroundColor: "#1A94E5", color: "#fff", borderColor: "#1A94E5" }
                      : {})
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </Container>
        </div>

        <Container>
          {/* Top Featured Tests */}
          <section className="py-6 sm:py-8 md:py-12">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Top Tests & Packages</h2>
            </div>
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide px-1 sm:px-0">
              {topTests.map((test) => (
                <TestCard
                  key={test.title}
                  imgSrc={test.imgSrc}
                  title={test.title}
                  desc={test.desc}
                  className="flex-shrink-0 w-60 sm:w-72 md:w-80"
                />
              ))}
            </div>
          </section>

          {/* Popular Tests */}
          <section className="py-6 sm:py-8 md:py-12">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Popular Tests</h2>
            </div>
            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-hide px-1 sm:px-0">
              {popularTests.map((test) => (
                <TestCard
                  key={test.title}
                  imgSrc={test.imgSrc}
                  title={test.title}
                  desc={test.desc}
                  className="flex-shrink-0 w-60 sm:w-72 md:w-80"
                />
              ))}
            </div>
          </section>

          {/* Tests by City */}
          <section className="py-4 sm:py-5 md:py-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
              Tests by City
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cityChips.map(c => (
                <Chip key={c} text={c} />
              ))}
            </div>
          </section>

          {/* Tests by Category */}
          <section className="py-4 sm:py-5 md:py-8">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4">
              Tests by Category
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categoryChips.map(c => (
                <Chip key={c} text={c} />
              ))}
            </div>
          </section>

          {/* Partner Section */}
          <section className="w-full py-8 sm:py-12 flex flex-col items-center justify-center text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Partner with HealthCheck
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base px-4">
              Expand your reach and grow your business by partnering with us.
            </p>
            <Button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold">
              Become a Partner
            </Button>
          </section>
          
          {/* Help Center Section */}
          <section className="w-full py-8 sm:py-12 flex flex-col items-center justify-center text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Learn More About Health Tests
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base px-4">
              Find answers to common questions about health tests and procedures.
            </p>
            <Button variant="outline" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold">
              Visit Our Help Center
            </Button>
          </section>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
