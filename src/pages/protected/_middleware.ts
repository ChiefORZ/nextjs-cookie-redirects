import jsonwebtoken from '@tsndr/cloudflare-worker-jwt';
import { NextRequest, NextResponse } from 'next/server';

import { DEFAULT_LANDING_ROUTE, JWT_SECRET } from '../../constants';

export const middleware = async (request: NextRequest) => {
  // when no cookie - redirect to home
  if (!request.cookies.session) {
    return NextResponse.redirect(DEFAULT_LANDING_ROUTE);
  }

  if (request.cookies.session) {
    try {
      await jsonwebtoken.verify(request.cookies.session, JWT_SECRET);
    } catch (err) {
      const redirect = NextResponse.redirect(DEFAULT_LANDING_ROUTE);
      redirect.clearCookie('session');
      return redirect;
    }
  }
};
