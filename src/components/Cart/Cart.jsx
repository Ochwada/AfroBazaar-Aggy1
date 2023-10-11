import React from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import {
    StyledMain, StyledGridContainer, StyledGridItem, StyledTypographyTitle,
    StyledEmptyButton, StyledCheckoutButton, StyledLink, StyledCardDetails,
    StyledHr, StyledHr2
} from './Styles';
import CartItem from './CartItem/CartItem';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const isEmpty = !cart?.line_items?.length;

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your shopping cart,
            <StyledLink to='/'> start adding some </StyledLink>!
        </Typography>
    );

    const FilledCart = () => (
        <>
            <StyledGridContainer container spacing={4}>
                {cart.line_items.map((item) => (
                    <StyledGridItem item xs={12} sm={3} key={item.id}>
                        {/* <div>{item.name}</div> */}
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty}
                            onRemoveFromCart={handleRemoveFromCart} />
                    </StyledGridItem>
                ))}
            </StyledGridContainer>

            < StyledHr />

            <StyledCardDetails>
                <Typography variant='h5' style={{ fontWeight: 600 }}>
                    Subtotal: <span style={{ color: 'green' }}>{cart.subtotal.formatted_with_symbol}</span>
                </Typography>
                <div>
                    <StyledEmptyButton size='large' type='button'
                        variant='contained' color='divider' onClick={handleEmptyCart}>
                        Empty Cart
                    </StyledEmptyButton>
                    <StyledCheckoutButton size='large' type='button'
                        variant='contained' component={Link} to="/ ">
                        Checkout
                    </StyledCheckoutButton>
                </div>
            </StyledCardDetails>

            < StyledHr2 />
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