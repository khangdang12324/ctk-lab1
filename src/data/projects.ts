export interface Project {
  id: string; // ← Thêm ID (slug)
  title: string;
  description: string;
  content: string; // ← Thêm chi tiết dài
  tech: string[];
  link?: string; // ← Tùy chọn
  github?: string; // ← Tùy chọn
}

export const projects: Project[] = [
  {
    id: "code-sparkx", // ← ID từ title
    title: "Code SparkX - Cloud-based Online IDE",
    description: "Môi trường phát triển tích hợp...",
    content: `Nội dung chi tiết dài...`, // ← Viết chi tiết 2-3 đoạn
    tech: ["Next.js", "Node.js", "Docker", "TypeScript"],
  },
  {
    id: "fleet-management",
    title: "Hệ thống Quản lý và Điều hành Đội xe (Fleet Management)",
    description: "Nền tảng quản lý xe dịch vụ...",
    content: `Nội dung chi tiết dài...`,
    tech: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    id: "ecommerce-platform",
    title: "Nền tảng Thương mại Điện tử",
    description: "Khởi tạo nền tảng thương mại điện tử...",
    content: `Nội dung chi tiết dài...`,
    tech: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
