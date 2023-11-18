import React, { useState } from 'react';
import { Container, Typography, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';

import {
    StyledMain, StyledGridContainer, StyledGridItem, StyledTypographyTitle,
    StyledEmptyButton, StyledCheckoutButton, StyledLink, StyledCardDetails,
    StyledHr, StyledHr2
} from './Styles';
import CartItem from './CartItem/CartItem';


const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    // ------- --- 
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };

    const handleUpdateQty = (itemId, newQty) => {
        handleUpdateCartQty(itemId, newQty);
        setSnackbarMessage('Product quantity updated!');
        setSnackbarOpen(true);
    };

    const handleRemove = (itemId) => {
        handleRemoveFromCart(itemId);
        setSnackbarMessage('Product removed from cart!');
        setSnackbarOpen(true);
    };

    const handleEmpty = () => {
        handleEmptyCart();
        setSnackbarMessage('Cart emptied!');
        setSnackbarOpen(true);
    };

    // ----- ----

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
                    Total Amount: <span style={{ color: '#009900' }}>{cart.subtotal.formatted_with_symbol}</span>
                </Typography>
                <div>
                    <StyledEmptyButton size='large' type='button'
                        variant='contained' color='divider' onClick={handleEmptyCart}>
                        Empty Cart
                    </StyledEmptyButton>
                    <StyledCheckoutButton size='large' type='button'
                        variant='contained' component={Link} to="/checkout">
                        Checkout
                    </StyledCheckoutButton>
                </div>
            </StyledCardDetails>

            < StyledHr2 />
        </>
    );

    if (!cart.line_items) return 'Loading ...'
    if (!cart || !cart.id) {
        console.error('Cart is empty or Cart ID is undefined.');
    }

    // --- return --- 
    return (
        <Container>
            <StyledMain />
            <StyledTypographyTitle variant='h4' gutterBottom>
                Your Shopping Cart
            </StyledTypographyTitle>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                message={snackbarMessage}
            />
        </Container>
    );
}

export default Cart;