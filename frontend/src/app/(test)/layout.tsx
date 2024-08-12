import React, {ReactNode} from 'react';
import {Box} from "@mui/material";

interface Props {
  children?: ReactNode;
}

const TestLayout = ({ children }: Props) => {
  return (
    <Box sx={{width: '100%'}}>
      {children}
    </Box>
  );
};

export default TestLayout;
