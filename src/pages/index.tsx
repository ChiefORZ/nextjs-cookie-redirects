import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      Logged Out!
      <br />
      Click to&nbsp;
      <a href="/auth/login">Login</a>
    </div>
  );
};

export default Home;
