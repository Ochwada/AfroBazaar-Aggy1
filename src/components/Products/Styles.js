
import { Grid,styled} from '@mui/material';


export const StyledMain = styled('main')(({ theme }) => ({
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
}));

export const StyledGridContainer = styled(Grid)({
    // Add any specific styles for the grid container if needed
});

export const StyledGridItem = styled(Grid)({
    flexGrow: 1,
});
