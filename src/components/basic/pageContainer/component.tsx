import React, { ReactNode } from 'react';

import { StyledPageContainer } from '.';

interface Props {
  children: ReactNode;
}

export const PageContainer = ({ children }: Props) => {
  return (
    <StyledPageContainer id="pageContainer" className="pageContainer">
      {children}
    </StyledPageContainer>
  );
};
