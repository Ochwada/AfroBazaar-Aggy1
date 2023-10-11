import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import {
    StyledMain, StyledGridContainer, StyledGridItem, StyledTypographyTitle,
    StyledEmptyButton, StyledCheckoutButton, StyledLink, StyledCardDetails,
} from './Styles';
import CartItem from './CartItem/CartItem';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const isEmpty = !cart?.line_items?.length;

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart,
            <StyledLink to='/'> Start adding some </StyledLink>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <StyledGridContainer container spacing={3}>
                {cart.line_items.map((item) => (
                    <StyledGridItem item xs={12} sm={4} key={item.id}>
                        {/* <div>{item.name}</div> */}
                        <CartItem item={item} onUpdateCartQty = {handleUpdateCartQty } 
                        onRemoveFromCart ={handleRemoveFromCart} />
                    </StyledGridItem>
                ))}
            </StyledGridContainer>
            <StyledCardDetails>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <StyledEmptyButton size='large' type='button' 
                    variant='contained' color='secondary' onClick={ handleEmptyCart }>
                        Empty Cart
                    </StyledEmptyButton>
                    <StyledCheckoutButton size='large' type='button' variant='contained' color='primary'>
                        Checkout
                    </StyledCheckoutButton>
                </div>
            </StyledCardDetails>
        </>
    );

    if (!cart.line_items) return 'Loading ...'
    return (
        <Container>
            <StyledMain />
            <StyledTypographyTitle variant='h4' gutterBottom>
                Your Shopping Cart
            </StyledTypographyTitle>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
}

export default Cart;