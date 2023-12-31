import React, { useState, useEffect } from 'react';
import { Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'
import { commerce } from '../../../lib/commerce';


import { ToolbarDiv, LayoutMain, StyledPaper, StyledStepper } from './Style'
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';

// ---- Document ----// 
const steps = ['Shipping Address', 'Payment Details'];


const Checkout = ({ cart }) => {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                setCheckoutToken(token);
            } catch (error) {

            }
        }
        generateToken();
    }, [cart]);

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );


    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken = {checkoutToken} />
        : <PaymentForm />


    return (
        <>
            <ToolbarDiv />
            <LayoutMain>
                <StyledPaper>
                    <Typography variant='h4' align='center'> Checkout</Typography>
                    <StyledStepper activeStep={activeStep}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel> {step} </StepLabel>
                            </Step>
                        ))}
                    </StyledStepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </StyledPaper>
            </LayoutMain>
        </>
    )
}

export default Checkout;