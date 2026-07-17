"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Button from "./Button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll lock that preserves position — prevents iOS Safari "jump to top" when
  // opening the menu from a scrolled position. Restores exact scrollY on close.
  useEffect(() => {
    if (!isMobileOpen) return;
    const scrollY = window.scrollY;
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isMobileOpen]);

  useEffect(() => {
    if (!isMobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-dark-bg/90 backdrop-blur-md border-b border-dark-border"
            : "bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-20"
        >
          <Link href="/" className="flex items-center gap-2" aria-label="Outreach Wellness — Home">
            <span className="font-display text-2xl text-gold-metallic italic">
              Outreach
            </span>
            <span className="font-body text-xs tracking-[0.3em] uppercase text-off-white">
              Wellness
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-wider uppercase text-gray-text hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Book Now
            </Button>
          </div>

          <button
            onClick={() => setIsMobileOpen(true)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Open menu"
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            <span className="block w-6 h-[2px] bg-gold" />
            <span className="block w-6 h-[2px] bg-gold" />
            <span className="block w-6 h-[2px] bg-gold" />
          </button>
        </nav>
      </header>

      {/* Mobile menu — full-screen sibling to header. z-[60] sits above the header
          so the in-overlay close button is unambiguously the topmost target. */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[60] bg-dark-bg flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="flex items-center justify-between h-20 px-6 border-b border-dark-border flex-shrink-0">
              <Link
                href="/"
                onClick={() => setIsMobileOpen(false)}
                className="flex items-center gap-2"
                aria-label="Outreach Wellness — Home"
              >
                <span className="font-display text-2xl text-gold-metallic italic">
                  Outreach
                </span>
                <span className="font-body text-xs tracking-[0.3em] uppercase text-off-white">
                  Wellness
                </span>
              </Link>
              <button
                onClick={() => setIsMobileOpen(false)}
                className="p-2 text-gold hover:text-gold-light transition-colors"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.07 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="text-2xl font-display text-off-white hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <Button
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="mt-4"
                >
                  Book Now
                </Button>
              </motion.div>
              <motion.a
                href="tel:6154177050"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="text-gray-text hover:text-gold transition-colors text-sm mt-2"
              >
                (615) 417-7050
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
