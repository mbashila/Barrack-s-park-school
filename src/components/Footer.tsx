import Link from "next/link";
import Image from "next/image";
import { Facebook, MapPin } from "lucide-react";

const footerNav = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Academics", href: "#" },
  { name: "Admissions", href: "#" },
  { name: "School Life", href: "#" },
  { name: "Gallery", href: "#" },
  { name: "News & Events", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left - Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-14 h-14 flex items-center justify-center mb-4">
              <Image
                src="/images/school-crest.png"
                alt="Barracka's Park School Crest"
                width={56}
                height={56}
                className="object-contain"
              />
            </div>
            <h2 className="text-white font-bold text-sm text-center md:text-left">
              BARRACKA'S PARK SCHOOL
            </h2>
            <p className="text-gray-300 text-xs text-center md:text-left">
              Learn • Grow • Succeed
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-4 md:gap-8 text-center">
              {footerNav.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-accent-red transition-colors text-xs font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right - Social & Location */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-2">
              <Facebook size={20} className="text-accent-red" />
              <span className="text-sm text-gray-300">
                Barrackas Park School
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={20} className="text-accent-red" />
              <span className="text-sm text-gray-300">
                Twin Palm Extension, Lusaka
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section with Border */}
        <div className="border-t border-navy-secondary pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-xs text-center md:text-left">
            © {currentYear} Barracka's Park School. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-gray-300 hover:text-accent-red transition-colors text-xs"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-gray-300 hover:text-accent-red transition-colors text-xs"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
