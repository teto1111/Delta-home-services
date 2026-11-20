import { NextResponse, type NextRequest } from "next/server";
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (/^\/(en|ar)(\/|$)/.test(pathname)) return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = "/en" + (pathname === "/" ? "" : pathname);
  return NextResponse.redirect(url);
}
export const config = { matcher: ["/((?!_next|.*\\..*|api).*)"] };
