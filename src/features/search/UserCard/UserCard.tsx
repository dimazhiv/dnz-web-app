import * as React from 'react';

import { Card, CardContent, Typography } from '@mui/material';

import './UserCard.css';

export type UserCardProps = {
  name?: string;
  jobTitle?: string;
  id?: number;
};

export default function UserCard({
  name,
  jobTitle,
  id,
}: UserCardProps) {
  return (
    <Card className="UserCard">
      <CardContent className="CardContent">
        <Typography variant="h2">
          {name}
        </Typography>

        <Typography className="CardSubTitle" variant="h3">
          {jobTitle}
        </Typography>

        <Typography variant="body1">
          {id}
        </Typography>
      </CardContent>
    </Card>

  );
}
