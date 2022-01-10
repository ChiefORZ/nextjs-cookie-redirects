import { NextResponse } from 'next/server';

import { DEFAULT_LANDING_ROUTE } from '../../../constants';

export const middleware = () => {
  const redirect = NextResponse.redirect(DEFAULT_LANDING_ROUTE);

  redirect.clearCookie('session');

  return redirect;
};
