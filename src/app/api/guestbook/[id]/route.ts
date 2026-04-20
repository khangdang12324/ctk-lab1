import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

// PUT /api/guestbook/[id] — Cập nhật lời nhắn theo id
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();
  const name = body?.name?.trim();
  const message = body?.message?.trim();

  if (!name || !message) {
    return NextResponse.json(
      { error: "Vui lòng nhập đầy đủ name và message" },
      { status: 400 },
    );
  }

  const entry = guestbookEntries.find((item) => item.id === id);

  if (!entry) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 },
    );
  }

  entry.name = name;
  entry.message = message;

  return NextResponse.json(entry);
}

// DELETE /api/guestbook/[id] — Xóa lời nhắn theo id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 },
    );
  }

  const deleted = guestbookEntries.splice(index, 1)[0];
  return NextResponse.json(deleted);
}
