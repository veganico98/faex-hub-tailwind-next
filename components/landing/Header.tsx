"use client";

import { navLinks } from "@/lib/data";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/Button";
import Image from "next/image";
import logo from "@/app/assets/LOGO.png";
import logoB from "@/app/assets/LOGO_BRANCO.png";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToSection(e: React.MouseEvent<HTMLElement>, href: string) {
    e.preventDefault();
    setMenuOpen(false);
    const target = href === "#" ? document.body : document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
    ${scrolled ? "bg-white dark:bg-stone-800 shadow-sm py-3" : "bg-white dark:bg-stone-800 py-4"}`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        <a
          href="#"
          onClick={(e) => scrollToSection(e, "#")}
          className="flex items-center"
        >
          <Image
            src={logo}
            alt="Logo"
            className="h-6 md:h-8 w-auto block dark:hidden"
          />

          <Image
            src={logoB}
            alt="Logo branco"
            className="h-6 md:h-8 w-auto hidden dark:block"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              href={link.href}
              key={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm text-gray-600 dark:text-slate-100 dark:hover:text-slate-300 hover:text-black transition">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button className="bg-black text-white hover:bg-indigo-500 rounded-full px-5 py-2 text-sm">
            Acessar plataforma
          </Button>
        </div>
      </div>
    </header>
  );
}
