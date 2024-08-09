import React, {ReactNode} from 'react';
import {Container} from "@mui/material";

interface Props {
  children?: ReactNode;
}

const VendorsLayout = ({ children }: Props) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default VendorsLayout;
