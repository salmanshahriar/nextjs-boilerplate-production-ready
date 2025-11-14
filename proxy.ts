import { type NextRequest, NextResponse } from "next/server";

export default function middleware(_request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\\.ico|(?:\\.svg|\\.png)|apple-icon\\.png).*)",
  ],
};
