import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";
// GET /api/guestbook — Lấy danh sách tất cả lời nhắn
export async function GET(request: NextRequest) {
  const limitParam = request.nextUrl.searchParams.get("limit");

  if (limitParam === null) {
    return NextResponse.json(guestbookEntries);
  }

  const limit = Number.parseInt(limitParam, 10);
  if (!Number.isInteger(limit) || limit <= 0) {
    return NextResponse.json(
      { error: "limit phải là số nguyên dương" },
      { status: 400 },
    );
  }

  const limitedEntries = guestbookEntries.slice(0, limit);
  return NextResponse.json(limitedEntries);
}
// POST /api/guestbook — Thêm lời nhắn mới
export async function POST(request: NextRequest) {
  const body = await request.json();
  const name = typeof body?.name === "string" ? body.name.trim() : "";
  const message = typeof body?.message === "string" ? body.message.trim() : "";

  // Kiểm tra dữ liệu đầu vào
  if (!name || !message) {
    return NextResponse.json(
      { error: "name và message là bắt buộc" },
      { status: 400 },
    );
  }

  if (name.length < 2 || name.length > 50) {
    return NextResponse.json(
      { error: "name phải từ 2 đến 50 ký tự" },
      { status: 400 },
    );
  }

  if (message.length < 1 || message.length > 500) {
    return NextResponse.json(
      { error: "message phải từ 1 đến 500 ký tự" },
      { status: 400 },
    );
  }

  const now = Date.now();
  const duplicateInOneMinute = guestbookEntries.some((entry) => {
    const sameContent =
      entry.name.trim().toLowerCase() === name.toLowerCase() &&
      entry.message.trim().toLowerCase() === message.toLowerCase();
    const createdAtMs = new Date(entry.createdAt).getTime();
    return sameContent && now - createdAtMs <= 60_000;
  });

  if (duplicateInOneMinute) {
    return NextResponse.json(
      {
        error:
          "Không thể gửi lời nhắn trùng lặp (cùng name và message) trong vòng 1 phút",
      },
      { status: 400 },
    );
  }

  // Tạo entry mới
  const newEntry = {
    id: Date.now().toString(),
    name,
    message,
    createdAt: new Date().toISOString(),
  };
  // Thêm vào đầu mảng (hiển thị mới nhất trước)
  guestbookEntries.unshift(newEntry);
  return NextResponse.json(newEntry, { status: 201 });
}
