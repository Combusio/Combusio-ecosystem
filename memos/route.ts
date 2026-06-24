import { NextResponse } from "next/server";
import { parseMemo } from "@/memoParser";

export async function POST(
  req: Request
) {
  const body = await req.json();

  return NextResponse.json(
    parseMemo(body.memo)
  );
}
