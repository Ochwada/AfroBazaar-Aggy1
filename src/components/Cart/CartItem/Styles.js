import React from 'react';
import { CardActions, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCardMedia = styled(CardMedia)({
  height: 240,
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