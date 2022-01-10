import React from 'react';

const ProtectedPage = () => {
  return (
    <div>
      Logged In! <br />
      Do you like to&nbsp;
      <a href="/auth/logout">Logout</a>
    </div>
  );
};

export default ProtectedPage;
