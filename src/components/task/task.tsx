import { Box } from '@mui/material';
import { borderRadius } from '@mui/system';
import React, { FC, ReactElement } from 'react';
import TaskHeader from './_taskHeader';

const Task: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="flex-start"
      flexDirection="column"
      mb={2}
      p={4}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        borderRadius: '8px',
        border: '1px solid',
        borderColor: 'error.light',
      }}
    >
      <TaskHeader />
    </Box>
  );
};

export default Task;
