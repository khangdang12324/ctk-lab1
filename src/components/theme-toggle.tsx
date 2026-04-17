"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsDark((prev) => !prev)}
      className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm transition-colors hover:bg-zinc-50"
      aria-label="Chuyển trạng thái sáng tối"
    >
      <span>{isDark ? "🌙" : "☀️"}</span>
      <span>{isDark ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
