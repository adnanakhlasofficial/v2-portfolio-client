import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import cookieNames from './constants/cookieNames';

export function middleware(request: NextRequest) {
  const token = request.cookies.get(cookieNames.accessToken);

  if (!token) {
    return NextResponse.redirect(new URL('/verify', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'], // protect dashboard and nested routes
};
