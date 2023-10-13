// Product.jsx
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
                        {product.price.formatted_with_symbol}
                    </Typography>
                </StyledCardContent>
                <Typography variant="body2"
                    color="textSecondary"
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
        </StyledRoot>
    )
}

export default Product;
