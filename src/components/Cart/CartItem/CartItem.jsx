import React from 'react';
import { Typography, Button, Card } from '@mui/material';
import { StyledCardMedia, StyledCardContent, StyledCardActions, StyledButtonsDiv } from './Styles'


const CartItem = ({ item }) => {

  return (
    <div>
      
        <Card>
          <StyledCardMedia image={item.image.url} alt={item.name} />
          <StyledCardContent>
            <Typography variant="body1" > {item.name}</Typography>
            <Typography variant="body1" > {item.line_total.formatted_with_symbol}</Typography>
          </StyledCardContent>
          <StyledCardActions>

            <StyledButtonsDiv>
              <Button type="button" size="small"> - </Button>
              <Typography>{item.quantity}</Typography>
              <Button type="button" size="small"> + </Button>
            </StyledButtonsDiv>
            <Button variant='contained' type="button" color="secondary">Remove</Button>
          </StyledCardActions>
        </Card>
   
    </div>
  )
}

export default CartItem;