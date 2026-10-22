"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Academics", href: "#" },
  { name: "Admissions", href: "#admissions" },
  { name: "School Life", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "News & Events", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-navy-primary sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-14 h-14 flex items-center justify-center">
              <Image
                src="/images/school-crest.png"
                alt="Barracka's Park School Crest"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-sm">
                BARRACKA'S PARK SCHOOL
              </h1>
              <p className="text-gray-300 text-xs">Learn • Grow • Succeed</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-white text-sm font-medium hover:text-accent-red transition-colors ${
                  link.name === "Home"
                    ? "border-b-2 border-accent-red pb-1"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Enrol Button */}
          <div className="hidden lg:block flex-shrink-0">
            <button className="btn-primary">
              Enrol Now <span>→</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-navy-secondary pt-4">
            <div className="flex flex-col gap-3">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-accent-red transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-primary w-full justify-center mt-2">
                Enrol Now <span>→</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
