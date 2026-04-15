const projects = [
  {
    title: "Code SparkX - Cloud-based Online IDE",
    description:
      "Môi trường phát triển tích hợp trên nền web. Cho phép người dùng viết code, biên dịch và thực thi mã theo thời gian thực một cách an toàn bằng cách cô lập môi trường trong các Docker containers (Sandbox environment).",
    tech: ["Next.js", "Node.js", "Docker", "TypeScript"],
  },
  {
    title: "Hệ thống Quản lý và Điều hành Đội xe (Fleet Management)",
    description:
      "Nền tảng quản lý xe dịch vụ (taxi/xe điện) quy mô doanh nghiệp. Tích hợp theo dõi trạng thái xe thời gian thực, quản lý phân ca, và dashboard thống kê hiệu suất hoạt động để tối ưu hóa quy trình vận hành.",
    tech: [".NET Core Web API", "React", "Microsoft Azure", "SQL Server"],
  },
  {
    title: "Nền tảng E-commerce & Quản lý Đơn hàng",
    description:
      "Hệ thống thương mại điện tử hiệu suất cao tối ưu SEO. Kiến trúc tách biệt Front-end và Back-end, tích hợp cổng thanh toán, quản lý kho hàng và thiết lập luồng CI/CD tự động deploy lên server.",
    tech: ["Next.js", "Express", "MongoDB", "DevOps / CI/CD"],
  },
];
export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 roundedfull"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
