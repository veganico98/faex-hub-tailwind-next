"use client";

import Image from "next/image";
import logo from "@/app/assets/LOGO_BRANCO.png";

export default function Footer() {
  return (
    <footer className="py-10 bg-[#1f1f1f]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <Image src={logo} alt="Faex Hub Logo" className="h-8 w-auto" />

          <p className="text-sm text-gray-400">
            © 2026 FAEX HUB. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
