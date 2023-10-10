import { styled } from '@mui/material/styles';
import { IconButton, Badge, MenuItem, Menu } from '@mui/material';


const drawerWidth = 0;

export const StyledAppBar = styled('div')(({ theme }) => ({
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
}));

export const StyledTitle = styled('div')({
    flexGrow: 1,
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
});

export  const StyledImage = styled('img')({
    marginRight: '10px',
});

export const StyledIconButton = styled(IconButton)({
    // ... styles for the IconButton
});

export const StyledBadge = styled(Badge)({
    // ... styles for the Badge
});

export const StyledMenu = styled(Menu)({
    // ... styles for the Menu
});

export const StyledMenuItem = styled(MenuItem)({
    // ... styles for the MenuItem
});