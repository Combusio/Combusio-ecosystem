import { NextResponse } from "next/server";
import { executeCommand } from "@/commandEngine";

export async function POST(
  req: Request
) {
  const body = await req.json();

  return NextResponse.json(
    await executeCommand(body)
  );
}
