import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo_.png';
import { StyledAppBar, StyledTitle, StyledImage, StyledIconButton, StyledBadge, StyledMenu, StyledMenuItem } from './Styles.js';




const Navbar = ({ totalItems }) => {

    const location = useLocation();


    return (
        <StyledAppBar component={AppBar} position='fixed' color='inherit'>
            <Toolbar>
                <StyledTitle variant='h6' color='inherit'>
                    <Link to="/">
                        <StyledImage src={logo} alt='Afrobazaar logo' height='100px' />
                    </Link>
                    <Typography component={Link} to="/"
                        variant='h6' color='#c4c818'
                        style={{ fontWeight: 'bold', textDecoration: 'none' }}>
                        AFROBAZAAR - BY AGGY
                    </Typography>
                </StyledTitle>
                <div style={{ flexGrow: 1 }} /> {/* This replaces classes.grow */}
                {location.pathname === '/' && (
                    <div style={{ display: 'flex' }}> {/* This replaces classes.button */}
                        <StyledIconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit'>
                            <StyledBadge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </StyledBadge>
                        </StyledIconButton>
                    </div>)}
            </Toolbar>
        </StyledAppBar>
    )
}

export default Navbar;