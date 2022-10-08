import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import TaskDateField from './_taskDateField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskTitleField from './_taskTitleField';

export const CreatTaskForm: FC = (props): ReactElement => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      <Typography>Create A Task</Typography>
      <Stack sx={{ width: '100%' }} spacing={2}>
        <TaskTitleField />
        <TaskDescriptionField />
        <TaskDateField />
      </Stack>
    </Box>
  );
};
