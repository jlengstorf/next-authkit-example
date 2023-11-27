import { SignJWT } from "jose";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (code) {
    try {
      // TODO Use the code returned to us by AuthKit and authenticate the user with WorkOS

      // TODO Create a JWT token with the user's information

      const url = request.nextUrl.clone();

      // TODO Cleanup params

      // Redirect to the requested path and store the session
      url.pathname = "/";
      const response = NextResponse.redirect(url);

      // TODO set a cookie with the user details

      return response;
    } catch (error) {
      return NextResponse.json(error);
    }
  }

  return NextResponse.json({
    error: "No authorization code was received from AuthKit",
  });
}
