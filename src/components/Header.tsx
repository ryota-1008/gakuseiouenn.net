"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/articles", label: "記事一覧" },
  { href: "/categories", label: "カテゴリ" },
  { href: "/contact", label: "お問い合わせ" },
];

function LogoIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* 外枠の四角（シャープ） */}
      <rect x="1" y="1" width="30" height="30" rx="4" fill="#2563eb" />
      {/* 中央のスパーク（稲妻型） */}
      <path d="M18 5L10 17h7l-3 10 12-14h-7l3-8z" fill="white" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-blue-100 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <LogoIcon />
          <div className="leading-none">
            <span className="text-xs font-semibold text-gray-400 block mb-0.5 tracking-wide">大学生の</span>
            <span className="font-black text-blue-700 text-base block leading-none">
              AI<span className="text-gray-700">活用ラボ</span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded text-sm font-semibold transition-all ${
                pathname.startsWith(link.href)
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded text-blue-600 hover:bg-blue-50 transition-colors"
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

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-50">
          <nav className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3.5 rounded text-sm font-semibold transition-all ${
                  pathname.startsWith(link.href)
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
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
