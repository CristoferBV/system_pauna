import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/LOGO-UNA.png';

const LoginLeftSide = () => {
  return (
    <div className="w-2/5 flex justify-center items-center">
      <div className="w-96 h-96 rounded-full bg-[#0E21CD] flex justify-center items-center">
        <Image src={Logo} alt="Logo" width={220} height={220} className="w-72 h-70" />
      </div>
    </div>
  );
};

export default LoginLeftSide;
