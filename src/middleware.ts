import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '../i18nConfig';
import { NextRequest, NextResponse } from 'next/server';
import { SessionData, sessionOptions } from './lib/session-options';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  const isLoggedIn = session.isLoggedIn;

  if (isLoggedIn) {
    if (pathname.match(/^\/[a-z]{2}\/dashboard$/)) {
      return Response.redirect(new URL(`/`, request.url));
    }
  }
  if (!isLoggedIn) {
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // if (pathname === '/') {
  //   return Response.redirect(new URL(`/login`, request.url));
  // }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};
