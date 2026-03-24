"use client";

import Link from "next/link";

const BOOKING_URL =
  "https://www.tebra.com/care/provider/casey-meeks-np-c-1013300045";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border bg-dark-bg" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-display text-2xl text-gold italic">
                Outreach
              </span>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-off-white">
                Wellness
              </span>
            </div>
            <p className="text-gray-text text-sm leading-relaxed">
              Prevention, nutrition, and education — a personalized approach to
              your health and wellness in Murfreesboro, TN.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
                {
                  href: BOOKING_URL,
                  label: "Book Appointment",
                  external: true,
                },
              ].map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-text text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-text text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Hours
            </h3>
            <div className="flex flex-col gap-2 text-sm text-gray-text">
              <div className="flex justify-between gap-4">
                <span>Mon – Fri</span>
                <span className="text-off-white">9:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sat – Sun</span>
                <span className="text-off-white">Closed</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold text-xs tracking-[0.2em] uppercase font-medium mb-4">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3 text-sm text-gray-text">
              <a
                href="https://www.google.com/maps/search/?api=1&query=321+W+McKnight+Dr+Suite+C+Murfreesboro+TN+37129"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
                aria-label="Get directions to Outreach Wellness"
              >
                321 W. McKnight Dr, Suite C
                <br />
                Murfreesboro, TN 37129
              </a>
              <a
                href="tel:6154177050"
                className="hover:text-gold transition-colors"
                aria-label="Call Outreach Wellness at (615) 417-7050"
              >
                (615) 417-7050
              </a>
              <a
                href="mailto:Casey@outreachwellness.com"
                className="hover:text-gold transition-colors"
                aria-label="Email Outreach Wellness"
              >
                Casey@outreachwellness.com
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer + Bottom Bar */}
        <div className="border-t border-dark-border mt-10 pt-6 space-y-4">
          <p className="text-gray-text/60 text-xs leading-relaxed max-w-4xl">
            The information on this website is for informational purposes only
            and does not constitute medical advice, diagnosis, or treatment.
            Always consult a qualified healthcare provider with any health
            concerns.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-text text-xs">
              &copy; {new Date().getFullYear()} Outreach Wellness. All rights
              reserved.
            </p>
            <p className="text-gray-text text-xs">
              Website by{" "}
              <a
                href="https://refineweb.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-gold-light transition-colors"
              >
                Refine Web
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
