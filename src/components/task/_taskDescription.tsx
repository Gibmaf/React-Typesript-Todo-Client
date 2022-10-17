import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React, { FC, ReactElement } from 'react';
import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription: FC<ITaskDescription> = (
  props,
): ReactElement => {
  const { description = 'Lorem ipsum dolor sit amet.' } =
    props;

  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};

export default TaskDescription;
