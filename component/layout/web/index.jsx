import React from 'react';
import WebFooter from './footer';
import WebHeader from './header';

const WebLayout = ({ children }) => (
  <section>
    <WebHeader />
    {children}
  </section>
);
export default WebLayout;
