import { styled } from '@mui/material/styles';
import { Grid, Typography, Button} from '@mui/material';

export const StyledMain = styled('main')(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
}));

export const StyledGridContainer = styled(Grid)({});

export const StyledGridItem = styled(Grid)({
    flexGrow: 1,
});

export const StyledTypographyTitle = styled(Typography)(({ theme }) => ({
    marginTop: '5%',
}));

export const StyledEmptyButton = styled(Button)(({ theme }) => ({
    minWidth: '150px',
    marginBottom: theme.breakpoints.down('xs') ? '5px' : '0',
    marginRight: theme.breakpoints.up('xs') ? '20px' : '0',
}));

export const StyledCheckoutButton = styled(Button)({
    minWidth: '150px',
});

export const StyledLink = styled('a')({
    textDecoration: 'none',
});

export const StyledCardDetails = styled('div')({
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
});
