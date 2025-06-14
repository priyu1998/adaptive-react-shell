import { Link, NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";
import LocationSelect from "./LocationSelect";

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
      <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 lg:px-10 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tight text-black">
          HealthCheck
        </Link>
        {/* Nav + LocationSelect - desktop */}
        <nav className="hidden lg:flex items-center gap-3 flex-1 ml-10">
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
          <div className="flex-1" />
          <div className="relative">
            <LocationSelect />
          </div>
        </nav>
        {/* Right CTA Buttons - desktop */}
        <div className="hidden lg:flex items-center gap-3 ml-6">
          <Button variant="outline" className="px-5 h-10">
            For Labs
          </Button>
          <Button className="px-5 h-10 font-semibold">
            Book a Test
          </Button>
        </div>
        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </div>
      {/* Mobile menu drawer */}
      {mobileOpen && (
        <div className="lg:hidden px-6 pb-4">
          <nav className="space-y-2 flex flex-col items-center">
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
            <div className="flex items-center gap-2 mt-3">
              <Button variant="outline" className="flex-1 h-10">
                For Labs
              </Button>
              <Button className="flex-1 h-10">
                Book a Test
              </Button>
            </div>
            <div className="mt-4 flex justify-center w-full">
              {/* Centered location select on mobile */}
              <LocationSelect className="w-full max-w-xs mx-auto block" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
