
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

        {/* Nav - desktop and larger: shown; mobile: hidden */}
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

        {/* Actions - desktop and larger: shown; mobile: hidden */}
        <div className="hidden lg:flex items-center gap-3">
          <LocationPicker />
          <Button variant="outline" className="px-4 h-9 text-sm">
            For Labs
          </Button>
          <Button className="px-4 h-9 text-sm font-semibold">
            Book a Test
          </Button>
        </div>

        {/* Mobile menu button (hamburger) - only shown on mobile and small screens */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu drawer (only on small screens) */}
      {mobileOpen && (
        <div className="lg:hidden px-4 pb-4 border-t">
          <div className="mb-4 flex justify-end">
            <LocationPicker />
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
          </nav>
        </div>
      )}
    </header>
  );
}
