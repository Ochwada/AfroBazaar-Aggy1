// Product.jsx
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { StyledRoot, StyledMedia, StyledCardContent, StyledCardActions } from './Styles.js';

const Product = ({ product }) => {
    return (
        <Card as={StyledRoot}>
            <CardMedia as={StyledMedia} image= { product.image } title={product.name} />
            <CardContent as={StyledCardContent}>
                <div>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary" >
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing as={StyledCardActions}>
                <IconButton aria-label="Add to Card">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;
