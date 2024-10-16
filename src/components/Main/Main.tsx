import React from 'react';
import Wrapper from '../Wrapper/Wrapper';

const Main: React.FC<React.HTMLAttributes<HTMLElement>> = ({ children, className = '', ...props }) => {
  return (
    <main className={`main ${className}`} {...props}>
      <Wrapper>{children}</Wrapper>
    </main>
  );
};

export default Main;
