"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => setCount((prev) => prev - 1)}
        className="h-10 w-10 rounded-lg bg-zinc-200 text-xl font-bold text-zinc-800 transition-colors hover:bg-zinc-300"
      >
        -
      </button>
      <span className="text-2xl font-bold w-12 text-center">{count}</span>
      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
        className="h-10 w-10 rounded-lg bg-emerald-600 text-xl font-bold text-white transition-colors hover:bg-emerald-700"
      >
        +
      </button>
    </div>
  );
}
