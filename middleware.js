import { NextResponse } from "next/server";
import { TEMPLATE_DOCUMENTS, TEMPLATE_SLUGS } from "./libs/templateDocuments.mjs";

const HIDDEN_TEMPLATE_PATHS = new Set(TEMPLATE_SLUGS.map((slug) => `/${slug}`));
const X_ROBOTS_VALUE = "noindex, nofollow, noarchive, nosnippet";

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export function middleware(request) {
  const pathname = normalizePath(request.nextUrl.pathname);
  const doc = request.nextUrl.searchParams.get("doc");

const isTemplatePath = HIDDEN_TEMPLATE_PATHS.has(pathname);
const isTemplateInternal = pathname.startsWith("/templatesurat/");
const isTemplatePdf = pathname.startsWith("/visa/");

if (!isTemplatePath && !isTemplateInternal && !isTemplatePdf) {
  return NextResponse.next();
}

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", X_ROBOTS_VALUE);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
