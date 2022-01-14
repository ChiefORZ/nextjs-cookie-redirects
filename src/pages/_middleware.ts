/* eslint-disable no-console */
import jsonwebtoken from '@tsndr/cloudflare-worker-jwt';
import { NextRequest, NextResponse } from 'next/server';

import {
  DEFAULT_HOME_ROUTE,
  DEFAULT_LANDING_ROUTE,
  JWT_SECRET,
} from '../constants';

export const middleware = async (request: NextRequest) => {
  console.log(`Accessing route ${request.nextUrl.pathname}`);

  if (
    request.nextUrl.pathname === '/' &&
    request.cookies.session &&
    !(await jsonwebtoken.verify(request.cookies.session, JWT_SECRET))
  ) {
    const redirect = NextResponse.redirect(DEFAULT_LANDING_ROUTE);
    redirect.clearCookie('session');
    return redirect;
  }

  if (
    request.nextUrl.pathname !== '/auth/logout' &&
    request.nextUrl.pathname === '/' &&
    request.cookies.session
  ) {
    console.log(
      `Redirecting because session is still present: ${JSON.stringify(
        {
          session: request.cookies.session,
          pathname: request.nextUrl.pathname,
        },
        null,
        2
      )}`
    );
    return NextResponse.redirect(DEFAULT_HOME_ROUTE);
  }
};
