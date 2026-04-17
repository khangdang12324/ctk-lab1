"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Dự án" },
  { href: "/skills", label: "Kỹ năng" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextMode = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextMode);
    localStorage.setItem("theme", nextMode ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-zinc-200/80 bg-white/85 backdrop-blur-md backdrop-saturate-150 dark:bg-gray-900/85 dark:border-gray-700">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg md:text-xl font-semibold text-zinc-900 dark:text-white"
          >
            Đặng Nguyễn Phúc Khang
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-gray-800 dark:text-zinc-200 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
              aria-label="Chuyển đổi giao diện sáng tối"
            >
              <span className="text-lg leading-none">🌓</span>
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-100 dark:bg-gray-800 dark:text-zinc-200 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
              aria-label="Mở menu điều hướng"
              aria-expanded={isMenuOpen}
            >
              <span className="text-xl leading-none">☰</span>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-zinc-200 bg-white/95 dark:bg-gray-900/95 dark:border-gray-700 shadow-lg ring-1 ring-zinc-100 dark:ring-gray-800 overflow-hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-zinc-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-zinc-200 dark:hover:bg-emerald-900/30 dark:hover:text-emerald-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
