import { NextResponse } from "next/server";
import { listenTransaction } from "@/transactionListener";

export async function POST(
  req: Request
) {
  const body = await req.json();

  return NextResponse.json(
    await listenTransaction(
      body.signature
    )
  );
}
