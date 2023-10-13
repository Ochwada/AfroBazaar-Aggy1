import { styled } from '@mui/material/styles';
import { Paper, Step, Stepper, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'


// ---- Document ----// 
export const ToolbarDiv = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

export const LayoutMain = styled('main')(({ theme }) => ({
    marginTop: '5%',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}));

export const StyledPaper = styled(Paper)(({ theme }) => ({
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        padding: theme.spacing(3),
    },
}));

export const StyledStepper = styled(Stepper)(({ theme }) => ({
    padding: theme.spacing(3, 0, 5),
}));
