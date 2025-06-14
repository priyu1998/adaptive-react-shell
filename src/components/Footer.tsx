
import { Link } from "react-router-dom";

const footerLinks = [
  { name: "About Us", path: "#" },
  { name: "Contact", path: "#" },
  { name: "Privacy Policy", path: "#" },
  { name: "Terms of Service", path: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white mt-16">
      <div className="mx-auto max-w-[1300px] px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center md:justify-start text-sm text-muted-foreground font-medium">
          {footerLinks.map(link => (
            <Link to={link.path} key={link.name} className="hover:underline">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="mt-2 md:mt-0 text-center text-sm text-muted-foreground font-medium">
          ©2024 HealthCheck. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
