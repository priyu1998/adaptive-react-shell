
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
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero section with filter chips */}
        <div className="bg-muted/30 py-4 sm:py-6 md:py-8">
          <Container>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {["Blood Tests", "Imaging", "Packages", "All Tests"].map(filter => (
                <button
                  key={filter}
                  className="rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-medium border bg-white hover:bg-[#1A94E5] hover:text-white hover:border-[#1A94E5] transition-colors"
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
          </Container>
        </div>

        <Container>
          {/* Top Featured Tests */}
          <div className="py-4 sm:py-6">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Top Tests & Packages</h2>
            </div>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {topTests.map((test) => (
                <TestCard
                  key={test.title}
                  imgSrc={test.imgSrc}
                  title={test.title}
                  desc={test.desc}
                  className="flex-shrink-0 w-64 sm:w-72"
                />
              ))}
            </div>
          </div>

          {/* Popular Tests */}
          <div className="py-4 sm:py-6">
            <div className="flex justify-between items-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Popular Tests</h2>
            </div>
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {popularTests.map((test) => (
                <TestCard
                  key={test.title}
                  imgSrc={test.imgSrc}
                  title={test.title}
                  desc={test.desc}
                  className="flex-shrink-0 w-64 sm:w-72"
                />
              ))}
            </div>
          </div>

          {/* Tests by City */}
          <div className="py-3 sm:py-4">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">Tests by City</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {cityChips.map(c => (
                <Chip key={c} text={c} />
              ))}
            </div>
          </div>

          {/* Tests by Category */}
          <div className="py-3 sm:py-4">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">Tests by Category</h3>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categoryChips.map(c => (
                <Chip key={c} text={c} />
              ))}
            </div>
          </div>

          {/* Partner Section */}
          <div className="w-full py-8 sm:py-12 flex flex-col items-center justify-center text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Partner with HealthCheck
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base px-4">
              Expand your reach and grow your business by partnering with us.
            </p>
            <Button className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold">
              Become a Partner
            </Button>
          </div>
          
          {/* Help Center Section */}
          <div className="w-full py-8 sm:py-12 flex flex-col items-center justify-center text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Learn More About Health Tests
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base px-4">
              Find answers to common questions about health tests and procedures.
            </p>
            <Button variant="outline" className="px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold">
              Visit Our Help Center
            </Button>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
