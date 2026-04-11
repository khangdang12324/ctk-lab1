export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>
        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Dang Nguyen Phuc Khang</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2212387</strong>
        </p>
        <p className="text-xl text-gray-600 mb-2">
          Lop: <strong>CTK46B</strong>
        </p>
        <p className="text-xl text-gray-600 mb-6">
          Môn: Các công nghệ mới trong PTPM
        </p>
        <div className="bg-blue-100 rounded-lg p-4">
          <p className="text-blue-800">
            🚀 Đây là project Next.JS đầu tiên của tôi! Hello minh rat dang cap!
          </p>
        </div>
      </div>
      <section>
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2">
          🏋️‍♂️ Sở thích cá nhân
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Đam mê công nghệ xe điện.</li>
          <li>Tập Gym cường độ cao.</li>
        </ul>
      </section>
    </main>
  );
}
