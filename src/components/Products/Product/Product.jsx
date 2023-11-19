// Product.jsx
<<<<<<< HEAD
import React, { useState } from 'react';
import { CardContent, Typography, IconButton, Snackbar } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { StyledRoot, StyledMedia, StyledCardContent, StyledCardActions } from './Styles.js'

const Product = ({ product, onAddToCart }) => {
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const handleAddToCartClick = () => {
        onAddToCart(product.id, 1);
        setIsSnackbarOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsSnackbarOpen(false);
    };


    return (
        <StyledRoot>

            <StyledMedia image={product.image.url} title={product.name} />
            <CardContent>
                <StyledCardContent>
                    <Typography variant="h6" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h6">
=======
import React from 'react';
import { Card as MuiCard, CardMedia as MuiCardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { StyledRoot, StyledMedia, StyledCardContent, StyledCardActions } from './Styles.js'

const Product = ({ product }) => {
    console.log(product);

    return (
        <StyledRoot>
            <StyledMedia image={product.image.url} title={product.name} />
            <CardContent>
                <StyledCardContent>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
>>>>>>> 91493ac (set product and Navbar - also connected to commerce.js)
                        {product.price.formatted_with_symbol}
                    </Typography>
                </StyledCardContent>
                <Typography variant="body2"
                    color="textSecondary"
<<<<<<< HEAD
                    dangerouslySetInnerHTML={{ __html: product.description }} />
            </CardContent>
            <StyledCardActions disableSpacing>
                <IconButton aria-label="Add to Cart"
                     onClick={handleAddToCartClick}>
                    <AddShoppingCart style={{}} />
                </IconButton>
            </StyledCardActions>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={isSnackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message="Item added"
            />
=======
                    dangerouslySetInnerHTML={{ __html: product.description }}/>
            </CardContent>
            <StyledCardActions disableSpacing>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </StyledCardActions>
>>>>>>> 91493ac (set product and Navbar - also connected to commerce.js)
        </StyledRoot>
    )
}

export default Product;
