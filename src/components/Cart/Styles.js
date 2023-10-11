import { styled } from '@mui/material/styles';
import { Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

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
    backgroundColor: '#c4c818',
    color: 'white',
    '&:hover': {
        backgroundColor: '#b4a973',
    },
    '&:active': {
        backgroundColor: '#c4c818',
    },
});

export const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: '#b4a973',
});

export const StyledCardDetails = styled('div')({
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
});

export const StyledHr = styled('hr')({
    border: 0,
    height: '1px',
    width: '60%',
    borderColor: '#969696',
    marginTop: '20px',
    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0))'
});

export const StyledHr2 = styled('hr')({
    overflow: 'visible',
    height: '30px',
    borderStyle: 'solid',
    borderColor: '#969696',
    borderWidth: '1px 0 0 0',
    borderRadius: '30px',
    '&:before': {
        display: 'block',
        content: '""',
        height: '30px',
        marginTop: '-31px',
        borderStyle: 'solid',
        borderColor: '#969696',
        borderWidth: '0 0 1px 0',
        borderRadius: '30px',
    }
});