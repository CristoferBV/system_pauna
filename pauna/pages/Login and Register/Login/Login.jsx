import React from 'react';

import LoginLeftSide from './LoginLeftSite';
import LoginRightSide from './LoginRightSite';

const Login = () => {
  return (
    <div className="h-screen flex">
      <LoginLeftSide />
      <LoginRightSide />
    </div>
  );
};

export default Login;
