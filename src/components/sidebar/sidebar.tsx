import { Grid } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { CreatTaskForm } from '../createTaskForm/createTaskForm';
import { Profile } from '../profile/profile';

export const SideBar: FC = (): ReactElement => {
  return (
    <Grid
      item
      md={4}
      sx={{
        height: '100vh',
        position: 'fixed',
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name="Manik" />
      <CreatTaskForm />
    </Grid>
  );
};
