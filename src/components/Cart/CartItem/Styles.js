import React from 'react';
import { Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCardMedia = styled(CardMedia)({
  height: 225,
});

export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const StyledCardActions = styled(CardActions)({
  justifyContent: 'space-between',
});

export const StyledButtonsDiv = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const StyledButton = styled(Button)({
  backgroundColor: '#b4a973',
  color: 'white',
  '&:hover': {
    backgroundColor: '#c4c818',
  },
  '&:active': {
    backgroundColor: '#c4c818',
  },
});