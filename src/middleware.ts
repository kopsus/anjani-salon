import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "./lib/action/session";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("session")?.value;
  const session = token ? await decrypt(token) : null;
  const isLoginPage = request.nextUrl.pathname === "/login";

  if (isLoginPage && session) {
    // Sudah login, tidak boleh akses login page
    return NextResponse.redirect(new URL("/products", request.url));
  }

  const protectedRoutes = ["/products", "/services"];
  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !session) {
    // Belum login, tapi akses halaman privat
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/products/:path*", "/services/:path*"],
};
