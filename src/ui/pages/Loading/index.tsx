import React, { memo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

export const Loading = memo(() => {
  return (
    <Box sx={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', flexDirection: 'column', gridGap: '15px',
    }}
    >
      <CircularProgress color="inherit" size={75} />
      <Typography component="p">
        Loading
      </Typography>
    </Box>
  );
});
