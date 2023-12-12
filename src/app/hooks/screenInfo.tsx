import React, { createContext, useContext, useEffect, useState } from "react";

interface ScreenInformationContextInterface {
  screenHeight: number;
  screenWidth: number;
  isSmall: boolean;
}

const ScreenInformationContext =
  createContext<ScreenInformationContextInterface>({
    screenHeight: 0,
    screenWidth: 0,
    isSmall: false,
  });

export const ScreenInformationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const isSmall = screenWidth >= 650;

  React.useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    setScreenHeight(window.innerHeight);
    setScreenWidth(window.innerWidth);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ScreenInformationContext.Provider
      value={{ screenHeight, screenWidth, isSmall }}
    >
      {children}
    </ScreenInformationContext.Provider>
  );
};

export const UseScreenInfo = () => {
  return useContext(ScreenInformationContext);
};
