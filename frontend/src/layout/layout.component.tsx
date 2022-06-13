import React from 'react';

import { NavBar } from './navbar';

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NavBar />
      
      {children}
    </>
  );

};