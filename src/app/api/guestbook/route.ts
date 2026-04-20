import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";
// GET /api/guestbook — Lấy danh sách tất cả lời nhắn
export async function GET() {
  return NextResponse.json(guestbookEntries);
}
