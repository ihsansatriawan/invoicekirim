"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors"
              aria-label="InvoiceKirim home"
            >
              InvoiceKirim
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("fitur")}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("harga")}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection("login")}
              className="text-neutral-700 hover:text-primary-600 transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => scrollToSection("cta")}
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Mulai Gratis
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-700 hover:text-primary-600 relative z-50"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-neutral-200 py-4">
            <div className="flex flex-col space-y-1">
              <button
                onClick={() => scrollToSection("fitur")}
                className="text-neutral-700 hover:bg-neutral-100 hover:text-primary-600 text-left px-4 py-3 rounded-lg transition-colors"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection("harga")}
                className="text-neutral-700 hover:bg-neutral-100 hover:text-primary-600 text-left px-4 py-3 rounded-lg transition-colors"
              >
                Harga
              </button>
              <button
                onClick={() => scrollToSection("login")}
                className="text-neutral-700 hover:bg-neutral-100 hover:text-primary-600 text-left px-4 py-3 rounded-lg transition-colors"
              >
                Login
              </button>
              <button
                onClick={() => scrollToSection("cta")}
                className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all mt-2"
              >
                Mulai Gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
