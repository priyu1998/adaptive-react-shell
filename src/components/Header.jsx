
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";
import LocationPicker from "./LocationPicker";

const navItems = [
  { name: "Tests", path: "#" },
  { name: "Labs", path: "#" },
  { name: "Packages", path: "#" },
  { name: "Offers", path: "#" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-40">
      <div className="mx-auto max-w-[1600px] flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4">
        {/* Logo */}
        <Link to="/" className="text-xl sm:text-2xl font-bold tracking-tight text-black">
          HealthCheck
        </Link>
        
        {/* Nav - desktop only */}
        <nav className="hidden lg:flex items-center gap-4 flex-1 ml-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                "px-3 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors" +
                (isActive ? " text-primary" : " text-muted-foreground")
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        
        {/* Right section - desktop only */}
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="outline" className="px-4 h-9 text-sm">
            For Labs
          </Button>
          <Button className="px-4 h-9 text-sm font-semibold">
            Book a Test
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 border-t">
          {/* Mobile Search */}
          <div className="mb-4">
            <div className="flex items-center px-3 py-2 rounded-lg bg-muted">
              {/* Search input for mobile only */}
              <svg
                className="text-muted-foreground mr-2 flex-shrink-0"
                width={16}
                height={16}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle cx={11} cy={11} r={8} />
                <line x1={21} y1={21} x2={16.65} y2={16.65} />
              </svg>
              <input
                className="flex-1 bg-transparent outline-none border-none text-sm"
                type="search"
                placeholder="Search"
                aria-label="Search for tests, packages or labs"
              />
            </div>
          </div>
          
          <nav className="space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 mt-4">
              <Button variant="outline" className="flex-1 h-10">
                For Labs
              </Button>
              <Button className="flex-1 h-10">
                Book a Test
              </Button>
            </div>
            <div className="mt-3 flex justify-center">
              <LocationPicker />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
