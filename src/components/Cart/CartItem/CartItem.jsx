import React from 'react';
import { Typography, Button, Card } from '@mui/material';
import { StyledButton, StyledCardMedia, StyledCardContent, StyledCardActions, StyledButtonsDiv } from './Styles'


const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

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
            <Button type="button" size="small"
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            > - </Button>

            <Typography>{item.quantity}</Typography>
            <Button type="button" size="small"
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            > + </Button>
          </StyledButtonsDiv>
          <StyledButton variant='contained' type="button"  
          // style={{ backgroundColor: '#b4a973', color: 'white' }} 
           onClick={() => onRemoveFromCart(item.id)} 
          >Remove</StyledButton>
        </StyledCardActions>
      </Card>

    </div>
  )
}

export default CartItem;