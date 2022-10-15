import { Box, Stack, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { Priority } from './enum/Priority';
import { Status } from './enum/Status';
import TaskDateField from './_taskDateField';
import TaskDescriptionField from './_taskDescriptionField';
import TaskSelectField from './_taskSelectField';
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
        <Stack
          direction="row"
          sx={{ width: '100%' }}
          spacing={2}
        >
          <TaskSelectField
            label="Status"
            name="status"
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
