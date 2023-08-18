import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (
  request: NextRequest,
  response: NextResponse
) => {
  let pathname = request.nextUrl.pathname;
  let token = request.cookies.get("token")?.value || "";
  const publicPath = pathname == "/login" || pathname == "/register";
  if (!publicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token && publicPath && pathname != "/home") {
    return NextResponse.redirect(new URL("/home", request.nextUrl));
  }
};
export const config = {
  //   matcher: ["/api/auth/:path*", "/", "/api"],
  matcher: ["/home", "/login", "/register"],
};
