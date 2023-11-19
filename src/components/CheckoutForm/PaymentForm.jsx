import React, { useEffect, useRef, useState } from 'react';
import { Typography, Button, Divider } from '@mui/material';

import Review from './Review';

// This function loads the PayPal JavaScript SDK script
const loadPaypalScript = (clientId) => {
  return new Promise((resolve, reject) => {
    if (window.paypal) {
      resolve();
    } else {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}&currency=EUR`;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error('PayPal SDK could not be loaded.'));
      document.body.appendChild(script);
    }
  });
};

const PaymentForm = ({ checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout }) => {
  const [sdkReady, setSdkReady] = useState(false);
  const paypalButtonContainerRef = useRef(null); // Create a ref for the PayPal button container

  useEffect(() => {
    const clientId = process.env.REACT_APP_PAYPAL_CLIENT_ID; // Your PayPal client ID
    loadPaypalScript(clientId)
      .then(() => {
        setSdkReady(true);
      })
      .catch((error) => {
        console.error('PayPal SDK could not be loaded', error);
      });
  }, []);

  //--------------------------------------------
  // Add a useEffect hook to log the checkoutToken when it changes
  

  //--------------------------------------------

  useEffect(() => {
    if (sdkReady && paypalButtonContainerRef.current) {
      window.paypal.Buttons({
        style: {
          layout: 'horizontal', // Set layout to horizontal
          color: 'silver',      // Set button color to blue
          shape: 'rect',      // Set button shape to rect
          label: 'paypal'     // Set button label to paypal
        },
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'EUR',
                value: checkoutToken.live.subtotal.raw.toString() // Convert to string if not already
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            const orderData = {
              // ... setup your order data using details from PayPal
            };
            onCaptureCheckout(checkoutToken.id, orderData);
            nextStep();
          });
        },
        onError: (err) => {
          // Handle errors here
          console.error('PayPal Button Error', err);
        }
      }).render(paypalButtonContainerRef.current);
    }
  }, [sdkReady, checkoutToken, nextStep, onCaptureCheckout]);

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>Payment method</Typography>
      <div ref={paypalButtonContainerRef} style={{ maxWidth: '150px' }} /> {/* PayPal button will be rendered inside this div */}

      {sdkReady ? null : <div>Loading PayPal...</div>}
      <br /><br />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={backStep}>Back</Button>
        <Button type="submit" variant="contained" color="primary">
          Pay {checkoutToken.live.subtotal.formatted_with_symbol}
        </Button>
      </div>
    </>
  );
};

export default PaymentForm;
