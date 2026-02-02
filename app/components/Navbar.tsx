"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang" },
  { href: "/timeline", label: "Program" },
  { href: "/fasilitas", label: "Fasilitas" },
  { href: "/agenda", label: "Agenda" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const isTransparent = pathname === "/";

  const linkClass = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);
    const base =
      "text-sm font-medium uppercase tracking-wider transition";
    if (isTransparent) {
      return isActive
        ? `${base} text-luxury-text border-b-2 border-luxury-accent pb-0.5`
        : `${base} text-luxury-text/90 hover:text-luxury-text`;
    }
    return isActive
      ? `${base} text-luxury-accent`
      : `${base} text-luxury-text hover:text-luxury-accent`;
  };

  return (
    <nav
      className={`w-full ${isTransparent ? "bg-transparent fixed top-0 left-0 right-0 z-50" : "bg-luxury-scaffold border-b border-white/10 relative z-10"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/assets/Duta_Pelajar_Remaja_Indonesia-removebg-preview.png"
              alt="DPR Indonesia Logo"
              width={44}
              height={44}
              className="object-contain"
              priority
            />
            <span
              className={`font-semibold text-sm uppercase tracking-wide hidden sm:block text-luxury-text`}
            >
              DPR Indonesia
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={linkClass(href)}>
                {label}
              </Link>
            ))}
            <a
              href="https://instagram.com/dpr_indonesia.official"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-medium uppercase tracking-wider transition ${isTransparent ? "text-luxury-text/90 hover:text-luxury-text" : "text-luxury-text hover:text-luxury-accent"}`}
            >
              Kontak
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
