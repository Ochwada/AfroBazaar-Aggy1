import React from 'react';
<<<<<<< HEAD
import { AppBar, Toolbar,Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo_.png';
import { StyledAppBar, StyledTitle, StyledImage, StyledIconButton, StyledBadge} from './Styles.js';




const Navbar = ({ totalItems }) => {

    const location = useLocation();


=======
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import logo from '../../assets/logo_.png';
import { StyledAppBar, StyledTitle, StyledImage, StyledIconButton,  StyledBadge, StyledMenu, StyledMenuItem  } from './Styles.js';



const Navbar = () => {
>>>>>>> 91493ac (set product and Navbar - also connected to commerce.js)
    return (
        <StyledAppBar component={AppBar} position='fixed' color='inherit'>
            <Toolbar>
                <StyledTitle variant='h6' color='inherit'>
<<<<<<< HEAD
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
=======
                    <StyledImage src={logo} alt='Afrobazaar logo' height='25px' />
                    Afrobazaar By Aggy
                </StyledTitle>
                <div style={{ flexGrow: 1 }} /> {/* This replaces classes.grow */}
                <div style={{ display: 'flex' }}> {/* This replaces classes.button */}
                    <StyledIconButton aria-label='Show cart items' color='inherit'>
                        <StyledBadge badgeContent={2} color='secondary'>
                            <ShoppingCart />
                        </StyledBadge>
                    </StyledIconButton>
                </div>
>>>>>>> 91493ac (set product and Navbar - also connected to commerce.js)
            </Toolbar>
        </StyledAppBar>
    )
}

export default Navbar;