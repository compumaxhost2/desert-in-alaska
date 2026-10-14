"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { FaGoogle, FaQuora } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Our Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

// SERVICES DROPDOWN LINKS
const serviceLinks = [
  {
    name: "Fire Suppression",
    href: "/services/commercial-fire-suppression-detroit",
  },
  {
    name: " HVAC Installation & Repair",
    href: "/services/commercial-hvac-detroit",
  },
  {
    name: "Kitchen Exhaust",
    href: "/services/kitchen-exhaust-systems-detroit",
  },
  {
    name: "Gas Piping ",
    href: "/services/gas-piping-detroit",
  },
  {
    name: " Dry Chemical Systems",
    href: "/services/industrial-dry-chemical-fire-suppression-detroit",
  },
];

// MORE DROPDOWN LINKS
const moreLinks = [
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "FAQs",
    href: "/faqs",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);

  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  // HARD SCROLL LOCK
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-white py-2">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex flex-col items-left justify-center gap-1 py-1"
          >
            <Image
              src="/logo.webp"
              alt="Desert in Alaska"
              width={180}
              height={70}
              priority
            />

            <span className="text-[10px] sm:text-[10px] md:text-[12px] italic text-slate-800 leading font-bold pl-1">
              Mechanical & Fire Suppression Contractor
            </span>
          </Link>

          {/* DESKTOP */}
          <nav className="hidden lg:flex items-center gap-2 font-serif">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDesktopServicesOpen(true)}
                  onMouseLeave={() => setDesktopServicesOpen(false)}
                >
                  <div
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-extrabold rounded-md
  ${
    isActive(link.href)
      ? "bg-[#86492D]/10 text-[#4195bd]"
      : "text-[#4195bd] hover:bg-[#86492D]/10"
  }`}
                  >
                    <Link href="/services" className="flex items-center gap-1">
                      Services
                    </Link>

                    <ChevronDown size={16} />
                  </div>

                  {/* SERVICES DROPDOWN */}
                  {desktopServicesOpen && (
                    <div className="absolute left-0 top-full w-72 bg-white shadow-lg rounded-md border">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.name}
                          href={s.href}
                          className="block px-4 py-2 text-sm hover:bg-[#86492D]/10"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-extrabold rounded-md
                  ${
                    isActive(link.href)
                      ? "bg-[#86492D]/10 text-[#4195bd]"
                      : "text-[#4195bd] hover:bg-[#86492D]/10"
                  }`}
                >
                  {link.name}
                </Link>
              ),
            )}

            {/* MORE DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDesktopMoreOpen(true)}
              onMouseLeave={() => setDesktopMoreOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-4 py-2 text-sm font-extrabold rounded-md
                ${
                  isActive("/blog") || isActive("/faqs")
                    ? "bg-[#86492D]/10 text-[#4195bd]"
                    : "text-[#4195bd] hover:bg-[#86492D]/10"
                }`}
              >
                More
                <ChevronDown size={16} />
              </button>

              {/* MORE DROPDOWN */}
              {desktopMoreOpen && (
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md border">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm hover:bg-[#86492D]/10 ${
                        isActive(item.href)
                          ? "bg-[#86492D]/10 text-[#4195bd]"
                          : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* GET A QUOTE */}
            <Link
              href="/contact"
              className="ml-4 rounded-md bg-[#9b5d2e] px-5 py-2 text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </nav>

          {/* MOBILE BTN */}
          <button
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden fixed inset-0 top-22 bg-white z-9999 transition
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <div className="px-6 py-6 h-full overflow-y-auto">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.name === "Services" ? (
                <div key={link.name}>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-[#86492D]/10"
                  >
                    Services
                    <ChevronDown size={18} />
                  </button>

                  {servicesOpen && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {serviceLinks.map((s) => (
                        <Link
                          key={s.name}
                          href={s.href}
                          onClick={() => setOpen(false)}
                          className="text-sm px-3 py-1 hover:underline"
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-4 py-2 hover:bg-[#86492D]/10"
                >
                  {link.name}
                </Link>
              ),
            )}

            {/* MOBILE MORE DROPDOWN */}
            <div>
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center justify-between w-full px-4 py-2 rounded-md hover:bg-[#86492D]/10"
              >
                More
                <ChevronDown size={18} />
              </button>

              {moreOpen && (
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {moreLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="text-sm px-3 py-1 hover:underline"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* GET A QUOTE */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 w-fit rounded-md bg-[#9b5d2e] px-5 py-2 text-white"
            >
              Get a Quote
            </Link>

            {/* CONTACT */}
            <div className="mt-6 border-t pt-4">
              <a
                href="tel:13139313070"
                className="flex items-center gap-2 py-2"
              >
                <FaPhoneAlt className="text-sm" />
                <span>313-931-3070</span>
              </a>

              <a
                href="mailto:desertinalaska@outlook.com"
                className="flex items-center gap-2 py-2"
              >
                <FaEnvelope className="text-sm" />
                <span>desertinalaska@outlook.com</span>
              </a>

              {/* SOCIAL */}
              <div className="mt-4 flex justify-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61582170474611"
                  target="_blank"
                  className="bg-[#9b5d2e] p-2 rounded-md text-white"
                >
                  <Facebook size={16} />
                </a>

                <a
                  href="https://www.instagram.com/desertinalaska/"
                  target="_blank"
                  className="bg-[#9b5d2e] p-2 rounded-md text-white"
                >
                  <Instagram size={16} />
                </a>

                <a
                  href="https://x.com/desertinalaska1"
                  target="_blank"
                  className="bg-[#9b5d2e] p-2 rounded-md text-white"
                >
                  <FaXTwitter size={16} />
                </a>

                <a
                  href="https://www.linkedin.com/in/desertinalaska/"
                  target="_blank"
                  className="bg-[#9b5d2e] p-2 rounded-md text-white"
                >
                  <Linkedin size={16} />
                </a>

                <a
                  href="https://share.google/JPBW3nf2o7HYJbXcY"
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="bg-[#9b5d2e] p-2 rounded-md text-white flex items-center justify-center"
                >
                  <FaGoogle size={16} />
                </a>

                <a
                  href="https://www.quora.com/profile/Desertin-Alaska"
                  target="_blank"
                  onClick={() => setOpen(false)}
                  className="bg-[#9b5d2e] p-2 rounded-md text-white flex items-center justify-center"
                >
                  <FaQuora size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
