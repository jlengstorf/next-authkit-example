import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    error: "TODO: implement AuthKit callback flow",
  });
}
