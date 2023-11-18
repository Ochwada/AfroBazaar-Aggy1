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
    const [shippingData, setShippingData] = useState({});
    const [isCheckoutTokenLoading, setIsCheckoutTokenLoading] = useState(true);


    useEffect(() => {
        const generateToken = async () => {
            setIsCheckoutTokenLoading(true); // Start loading - ADDED
            try {
                /*  const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                 setCheckoutToken(token); */
                if (cart && cart.id) {
                    // Generate the checkout token
                    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                    // Fetch the live object using the token
                    const liveObject = await commerce.checkout.getLive(token.id);
                    // Update the checkoutToken state with the live object
                    setCheckoutToken({ ...token, live: liveObject });// - ADDED
                }

            } catch (error) {
                console.error("Failed to generate checkout token", error);
            }
            setIsCheckoutTokenLoading(false);
        };
        if (cart.id) {
            generateToken();
        }

    }, [cart]);
    // ---------------------------------------------------------------- //
    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);


    const next = (data) => {

        if (isCheckoutTokenLoading || !checkoutToken || !checkoutToken.live) {
            // You can handle this with an error message to the user
            console.error("Please wait for the data to load before proceeding");
            return;
        } // ADDED

        setShippingData(data);
        nextStep();
    }

    // ---------------------------------------------------------------- //
    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    );


    /*  const Form = () => activeStep === 0
         ? <AddressForm checkoutToken = {checkoutToken}  next = {next} />
         : <PaymentForm shippingData = {shippingData} checkoutToken={checkoutToken} /> */
    const Form = () => (
        activeStep === 0
            ? <AddressForm checkoutToken={checkoutToken} next={next} isCheckoutTokenLoading={isCheckoutTokenLoading} />
            : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} />
    );


    return (
        <>
            <ToolbarDiv />
            <LayoutMain>
                {isCheckoutTokenLoading ? (
                    <CircularProgress /> // Show a loading spinner or any loading indicator
                ) : ( // ADDED from isCheckout
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
                )}
            </LayoutMain>
        </>
    )
}

export default Checkout;