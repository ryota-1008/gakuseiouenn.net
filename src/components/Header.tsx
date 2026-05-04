"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/articles", label: "記事" },
  { href: "/categories", label: "カテゴリ" },
  { href: "/about", label: "運営者" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-5 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-75 transition-opacity">
          <div className="w-7 h-7 bg-neutral-900 rounded-[6px] flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M9 1L5 9h4l-2 6 7-8H8l2-6z" fill="white" />
            </svg>
          </div>
          <span className="font-bold text-neutral-900 text-[13px] tracking-tight">大学生AI活用ラボ</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-[13px] transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-neutral-900 font-semibold"
                  : "text-neutral-500 hover:text-neutral-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-neutral-500 hover:text-neutral-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
          aria-expanded={menuOpen}
        >
          <div className="w-[18px] h-3.5 flex flex-col justify-between">
            <span className={`block h-px bg-current transition-transform origin-top-left ${menuOpen ? "rotate-45 translate-x-px" : ""}`} />
            <span className={`block h-px bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-transform origin-bottom-left ${menuOpen ? "-rotate-45 translate-x-px" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-100">
          <nav className="max-w-4xl mx-auto px-5 py-3 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-2 py-3 text-sm transition-colors border-b border-neutral-50 last:border-0 ${
                  pathname.startsWith(link.href)
                    ? "text-neutral-900 font-semibold"
                    : "text-neutral-500 hover:text-neutral-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
