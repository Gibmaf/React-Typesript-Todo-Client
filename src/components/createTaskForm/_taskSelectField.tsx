import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import React, { FC, ReactElement } from 'react';

const TaskSelectField: FC = (): ReactElement => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="status">Status</InputLabel>
      <Select
        labelId="status"
        id="status-select"
        value=""
        label="Status"
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
export default TaskSelectField;
