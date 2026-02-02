"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/agenda", label: "Event & Kegiatan" },
  { href: "/fasilitas", label: "Fasilitas" },
  { href: "/unduhan", label: "Unduhan" },
  { href: "/kontak", label: "Kontak" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);
    const base =
      "text-sm font-medium uppercase tracking-wider transition";
    return isActive
      ? `${base} text-white`
      : `${base} text-white/80 hover:text-white`;
  };

  const navClasses = [
    "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
    !isScrolled ? "bg-transparent" : "bg-primary shadow-md",
    isScrolled ? "py-2" : "py-3",
  ].join(" ");

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png"
              alt="DPR Indonesia Logo"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
            <span className="font-semibold text-sm uppercase tracking-wide hidden sm:block text-white">
              DPR Indonesia
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
