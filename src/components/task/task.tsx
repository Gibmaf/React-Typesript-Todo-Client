import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React, { FC, ReactElement } from 'react';
import { Priority } from '../createTaskForm/enum/Priority';
import { Status } from '../createTaskForm/enum/Status';
import { renderPriorityBorderColor } from './helpers/renderPriorityBorderColor';
import { ITask } from './interfaces/ITask';
import TaskDescription from './_taskDescription';
import TaskFooter from './_taskFooter';
import TaskHeader from './_taskHeader';

const Task: FC<ITask> = (props): ReactElement => {
  const {
    date = new Date(),
    description = 'Lorem ipsum dolor sit amet.',
    id,
    onClick = (e) => console.log(e),
    onStatusChange = (e) => console.log(e),
    priority = Priority.normal,
    status = Status.completed,
    title,
  } = props;

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
        borderColor: renderPriorityBorderColor(priority),
      }}
    >
      <TaskHeader title={title} date={date} />
      <TaskDescription description={description} />
      <TaskFooter
        id={id}
        status={status}
        onClick={onClick}
        onStatusChange={onStatusChange}
      />
    </Box>
  );
};

Task.propTypes = {
  title: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  description: PropTypes.string,
  onStatusChange: PropTypes.func,
  onClick: PropTypes.func,
  priority: PropTypes.string,
  status: PropTypes.string,
};

export default Task;
