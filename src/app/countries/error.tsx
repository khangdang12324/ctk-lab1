"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CountriesErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CountriesErrorPage({
  error,
  reset,
}: CountriesErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl font-semibold mb-3">
        Khong the tai du lieu quoc gia
      </h2>
      <p className="text-zinc-500 mb-6">
        Da xay ra loi trong qua trinh tai du lieu. Vui long thu lai.
      </p>
      <Button onClick={reset}>Thu lai</Button>
    </div>
  );
}
