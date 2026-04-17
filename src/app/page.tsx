import Link from "next/link";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      {/* Hero section */}
      <div className="text-center mb-16">
        <div className="w-24 h-24 bg-white rounded-full mx-auto mb-6 flex items-center justify-center border border-zinc-200 shadow-sm">
          <span className="text-3xl font-semibold text-zinc-500">A</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">
          Xin chào! Tôi là{" "}
          <span className="text-emerald-600">Đặng Nguyễn Phúc Khang</span>
        </h1>
        <p className="text-xl text-zinc-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          Sinh viên năm 4 ngành Công nghệ Thông tin tại Đại học Đà Lạt. Tôi tập
          trung vào phát triển Web Full-stack với định hướng xây dựng sản phẩm
          có hiệu năng tốt và trải nghiệm người dùng rõ ràng.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/projects"
            className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition-colors"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="border border-zinc-300 bg-white px-6 py-3 rounded-xl text-zinc-700 hover:bg-zinc-50 transition-colors"
          >
            Liên hệ
          </Link>
        </div>
      </div>
      {/* Skills section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold text-zinc-900 text-center mb-8">
          Kỹ năng
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js / Express",
            "C# / .NET Core",
            "PostgreSQL / SQL Server",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-white border border-zinc-200 rounded-xl p-4 text-center text-zinc-700 hover:border-zinc-300 hover:shadow-sm transition-all"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      {/* CTA section */}
      <div className="bg-white border border-zinc-200 rounded-3xl p-8 text-center shadow-sm">
        <h2 className="text-2xl font-semibold text-zinc-900 mb-3">
          Đọc Blog của tôi
        </h2>
        <p className="text-zinc-600 mb-4">
          Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ
        </p>
        <Link
          href="/blog"
          className="text-emerald-600 font-medium hover:underline"
        >
          Xem blog →
        </Link>
      </div>
    </div>
  );
}
