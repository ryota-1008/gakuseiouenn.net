"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/articles",   label: "記事一覧" },
  { href: "/categories", label: "カテゴリ" },
  { href: "/contact",    label: "お問い合わせ" },
];

function LogoIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="4" fill="#1d4ed8" />
      <path d="M18 5L10 17h7l-3 10 12-14h-7l3-8z" fill="white" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <LogoIcon />
          <div className="leading-none">
            <span className="text-[10px] font-medium text-gray-400 block mb-0.5 tracking-wide">大学生の</span>
            <span className="font-black text-gray-900 text-sm block leading-none tracking-tight">
              AI<span className="text-blue-700">活用ラボ</span>
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1.5 text-sm transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-blue-700 font-bold"
                  : "text-gray-500 font-medium hover:text-gray-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden w-9 h-9 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニューを開く"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-transform origin-top-left ${menuOpen ? "rotate-45 translate-x-px" : ""}`} />
            <span className={`block h-0.5 bg-current transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-transform origin-bottom-left ${menuOpen ? "-rotate-45 translate-x-px" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="max-w-4xl mx-auto px-4 py-2 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-3 text-sm font-medium transition-colors border-b border-gray-50 last:border-0 ${
                  pathname.startsWith(link.href)
                    ? "text-blue-700 font-bold"
                    : "text-gray-700 hover:text-gray-900"
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
