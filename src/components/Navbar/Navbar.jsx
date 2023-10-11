import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/logo_.png';
import { StyledAppBar, StyledTitle, StyledImage, StyledIconButton, StyledBadge, StyledMenu, StyledMenuItem } from './Styles.js';



const Navbar = ({ totalItems }) => {
    return (
        <StyledAppBar component={AppBar} position='fixed' color='inherit'>
            <Toolbar>
                <StyledTitle variant='h6' color='inherit'>
                    <StyledImage src={logo} alt='Afrobazaar logo' height='100 px' />
                    <Typography variant='h6' color='#c4c818' style={{ fontWeight: 'bold' }}> AFROBAZAAR - BY AGGY </Typography>
                    
                </StyledTitle>
                <div style={{ flexGrow: 1 }} /> {/* This replaces classes.grow */}
                <div style={{ display: 'flex' }}> {/* This replaces classes.button */}
                    <StyledIconButton aria-label='Show cart items' color='inherit'>
                        <StyledBadge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart />
                        </StyledBadge>
                    </StyledIconButton>
                </div>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Navbar;