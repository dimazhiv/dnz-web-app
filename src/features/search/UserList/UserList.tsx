import * as React from 'react';

import { Grid } from '@mui/material';

import UserCard from '../UserCard/UserCardContainer';

export type UserListProps = {
  userIds: string[];
};

export default function UserList({ userIds }: UserListProps) {
  return (

    <Grid
      container
      className="App-gridContainer"
      spacing={4}
    >
      {userIds.map((userId) => (
        <Grid key={userId} item xs={12} sm={4} justifyContent="center">
          <UserCard userId={userId} />

        </Grid>
      ))}

    </Grid>

  );
}
