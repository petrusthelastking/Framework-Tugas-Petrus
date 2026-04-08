import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./Middleware/withAuth";

export const middleware = withAuth(
  function middleware(request: NextRequest) {
    return NextResponse.next();
  },
  ["/profile"]
);

export const config = {
  matcher: ["/profile"],
};
