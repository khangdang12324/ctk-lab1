"use client";
export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Đã xảy ra l�-i!</h2>
      <p className="text-gray-600 mb-6">
        {error.message || "Không th�f tải n�Ti dung blog. Vui lòng thử lại."}
      </p>
      <button
        onClick={() => reset()}
        className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700
transition-colors"
      >
        Thử lại
      </button>
    </div>
  );
}


