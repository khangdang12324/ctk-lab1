import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-linear-to-br from-sky-50 via-white to-cyan-50">
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="relative mx-auto mb-10 h-56 w-56">
          <div className="absolute inset-0 rounded-full bg-emerald-100/70 blur-2xl animate-pulse" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white shadow-xl border border-emerald-100">
            <svg
              viewBox="0 0 220 220"
              className="h-44 w-44"
              role="img"
              aria-label="Minh họa trang 404"
            >
              <circle cx="110" cy="110" r="80" fill="#ECFDF5" />
              <text
                x="110"
                y="122"
                textAnchor="middle"
                fontSize="52"
                fontWeight="700"
                fill="#047857"
              >
                404
              </text>
              <circle cx="62" cy="92" r="5" fill="#34D399" />
              <circle cx="158" cy="92" r="5" fill="#34D399" />
              <path
                d="M76 150 C92 135, 128 135, 144 150"
                stroke="#047857"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <span className="absolute -right-2 top-8 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white animate-bounce">
            Ôi!
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Trang không tồn tại
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Có thể đường dẫn đã bị thay đổi hoặc trang này đã được xóa. Bạn có thể
          quay về trang chủ để tiếp tục duyệt nội dung.
        </p>

        <div className="flex items-center justify-center gap-3">
          <Link
            href="/"
            className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors inline-block"
          >
            Về trang chủ
          </Link>
          <Link
            href="/blog"
            className="border border-emerald-200 text-emerald-700 px-6 py-2.5 rounded-lg hover:bg-emerald-50 transition-colors inline-block"
          >
            Xem Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
