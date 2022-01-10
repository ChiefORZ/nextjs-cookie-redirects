import type { NextPage } from 'next';
import React from 'react';

const Home: NextPage = () => {
  return (
    <div>
      Click to&nbsp;
      <a href="/auth/login">Login</a>
    </div>
  );
};

export default Home;
