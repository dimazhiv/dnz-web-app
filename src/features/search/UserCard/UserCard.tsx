import * as React from 'react';

import { Card, CardContent, Typography } from '@mui/material';

export type UserCardProps = {
  name: string;
  jobTitle: string;
  id: number;
};

export default function UserCard({ name, jobTitle, id }: UserCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2">
          {name}
        </Typography>

        <Typography variant="h3">
          {jobTitle}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {id}
        </Typography>
      </CardContent>
    </Card>
  );
}
