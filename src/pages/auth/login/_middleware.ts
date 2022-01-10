import jsonwebtoken from '@tsndr/cloudflare-worker-jwt';
import { NextResponse } from 'next/server';

import { DEFAULT_HOME_ROUTE, JWT_SECRET } from '../../../constants';

export const middleware = async () => {
  const redirect = NextResponse.redirect(DEFAULT_HOME_ROUTE);

  const jwt = await jsonwebtoken.sign(
    {
      username: 'John Doe',
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + 7 * (24 * 60 * 60), // Expires: Now + 7d
    },
    JWT_SECRET
  );

  redirect.cookie('session', jwt, {
    httpOnly: true,
  });
  return redirect;
};
