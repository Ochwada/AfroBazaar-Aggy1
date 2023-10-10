// Styles.js
import styled from "@emotion/styled";
import { Card as MuiCard, CardMedia as MuiCardMedia } from '@mui/material';

export const StyledRoot = styled(MuiCard)`
  maxWidth: 100%;

`;

export const StyledMedia = styled(MuiCardMedia)`
    height: 225px;
    paddingTop: 56.25%; // 16:9 aspect ratio
`;

export const StyledCardContent = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const StyledCardActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;
