import React from 'react';

<<<<<<< HEAD
import { StyledGridContainer, StyledGridItem, StyledMain } from './Styles'
=======

import {StyledGridContainer, StyledGridItem, StyledMain} from './Styles'
>>>>>>> 91493ac (set product and Navbar - also connected to commerce.js)
import Product from './Product/Product';



<<<<<<< HEAD
const Products = ({ products, onAddToCart }) => {
=======
const Products = ({products}) => {
>>>>>>> 91493ac (set product and Navbar - also connected to commerce.js)
    return (
        <StyledMain>
            <StyledGridContainer container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <StyledGridItem item key={product.id} xs={12} sm={6} md={4} lg={3}>
<<<<<<< HEAD
                        <Product product={product} onAddToCart={onAddToCart}/>
=======
                        <Product product={product} />
>>>>>>> 91493ac (set product and Navbar - also connected to commerce.js)
                    </StyledGridItem>
                ))}
            </StyledGridContainer>
        </StyledMain>
    );
}

export default Products;
