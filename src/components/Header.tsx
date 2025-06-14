
import { Link, NavLink } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import React from "react";

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
        {/* Nav + Search - desktop */}
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
          {/* Spacer */}
          <div className="flex-1" />
          <div className="relative w-64">
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 pr-6 py-2 rounded-lg bg-muted"
            />
            <span className="absolute left-3 top-2 text-muted-foreground">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#999" strokeWidth="2"/>
                <line x1="15.0166" y1="15.4853" x2="18" y2="18" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
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
            <div className="flex items-center gap-2 mt-3">
              <Button variant="outline" className="flex-1 h-10">
                For Labs
              </Button>
              <Button className="flex-1 h-10">
                Book a Test
              </Button>
            </div>
            <div className="mt-2">
              <Input
                type="text"
                placeholder="Search"
                className="w-full bg-muted pl-10"
              />
              <span className="absolute left-8 top-[78px] text-muted-foreground pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="#999" strokeWidth="2"/>
                  <line x1="15.0166" y1="15.4853" x2="18" y2="18" stroke="#999" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
