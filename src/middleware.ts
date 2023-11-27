import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  // TODO add handling for logged in/logged out users

  return NextResponse.next();
}

// Match against the account page
export const config = { matcher: ["/account/:path*"] };
