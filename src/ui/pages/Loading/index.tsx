import React, { FC, memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

interface Props {
  width: string;
  height: string;
}

export const Loading: FC<Props> = memo(({ width, height }) => {
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width, height, flexDirection: 'column', gridGap: '15px',
    }}
    >
      <CircularProgress color="inherit" size={75} />
      <Typography component="p">
        Loading
      </Typography>
    </Box>
  );
});
