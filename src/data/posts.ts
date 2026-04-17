export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}
export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel. Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR), Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    excerpt:
      "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học. Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
  },
  {
    slug: "phat-trien-web-voi-nextjs",
    title: "Phát triển web với Next.JS — Hướng dẫn cơ bản",
    excerpt:
      "Bắt đầu hành trình phát triển web hiện đại với Next.JS qua hướng dẫn chi tiết.",
    content:
      "Next.JS là một framework React mạnh mẽ giúp bạn xây dựng các ứng dụng web hiệu suất cao. Dưới đây là hướng dẫn cơ bản để bắt đầu:",
    date: "2025-02-10",
    category: "Công nghệ",
  },
  {
    slug: "git-github-version-control",
    title: "Git & GitHub — Quản lý phiên bản code hiệu quả",
    excerpt:
      "Tìm hiểu cách sử dụng Git và GitHub để quản lý mã nguồn và cộng tác trong dự án.",
    content: `Git là một hệ thống kiểm soát phiên bản phân tán, cho phép bạn theo dõi các thay đổi trong mã nguồn. GitHub là nền tảng lưu trữ kho Git trực tuyến.

Các lệnh cơ bản Git:
- git init: Khởi tạo repository
- git add: Thêm file vào staging area
- git commit: Lưu thay đổi vào history
- git push: Đẩy code lên remote repository
- git pull: Kéo code mới nhất từ remote
- git branch: Tạo và quản lý nhánh
- git merge: Gộp các nhánh lại

Tại sao dùng Git:
- Lưu trữ toàn bộ lịch sử thay đổi
- Hỗ trợ làm việc nhóm
- Dễ kiểm tra lỗi và sử dụng git revert
- Công cụ quản lý branch linh hoạt
- Tích hợp với các CI/CD pipeline`,
    date: "2025-02-15",
    category: "Công nghệ",
  },
];
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
