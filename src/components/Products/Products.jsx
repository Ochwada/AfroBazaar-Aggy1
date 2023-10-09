import React from 'react';
import { Grid } from '@mui/material';
import Product from './Product/Product';

const products = [
    {
        id: 1,
        name: "Shoes",
        description: "Running shoes",
        price: "$5",
        image: 'https://media.istockphoto.com/id/1400271781/de/foto/nahaufnahme-einer-jungen-frau-die-turnschuhe-zusammenbindet.jpg?s=612x612&w=0&k=20&c=k_Rvqd1Zm4S3Vj64PwGc6KTZ2EHfUY2K5cRav681cyg='
    },
        
    { 
        id: 2, 
        name: "Udongo", 
        description: "Eating stones", 
        price: "$10", 
        image: 'https://media.istockphoto.com/id/1400271781/de/foto/nahaufnahme-einer-jungen-frau-die-turnschuhe-zusammenbindet.jpg?s=612x612&w=0&k=20&c=k_Rvqd1Zm4S3Vj64PwGc6KTZ2EHfUY2K5cRav681cyg='
    },
        
];

const Products = () => {
    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <  Product product = {product} />
                        {/* <div>
                            <h2>{product.name}</h2>
                            <p>{product.description}</p>
                        </div> */}
                    </Grid>
                ))}
            </Grid>
        </main>
    );
}

export default Products;