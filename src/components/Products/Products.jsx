import React from 'react';


import {StyledGridContainer, StyledGridItem, StyledMain} from './Styles'
import Product from './Product/Product';



const Products = ({products}) => {
    return (
        <StyledMain>
            <StyledGridContainer container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <StyledGridItem item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </StyledGridItem>
                ))}
            </StyledGridContainer>
        </StyledMain>
    );
}

export default Products;