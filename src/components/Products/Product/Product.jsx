// Product.jsx
import React from 'react';
import { Card as MuiCard, CardMedia as MuiCardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { StyledRoot, StyledMedia, StyledCardContent, StyledCardActions } from './Styles.js'

const Product = ({ product, onAddToCart }) => {

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
                    onClick={() => onAddToCart(product.id, 1)}>
                        
                    <AddShoppingCart />
                </IconButton>
            </StyledCardActions>
        </StyledRoot>
    )
}

export default Product;
