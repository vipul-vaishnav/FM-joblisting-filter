import React, { useState, useEffect } from 'react';
import BgHeaderMb from './../images/bg-header-mobile.svg';
import BgHeaderDS from './../images/bg-header-desktop.svg';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = (): void => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const imageSrc: string = windowWidth >= 640 ? BgHeaderDS : BgHeaderMb;

  return (
    <div className="h-32 bg-darkCyan relative">
      <img src={imageSrc} alt="bg-header" className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
};

export default Header;
