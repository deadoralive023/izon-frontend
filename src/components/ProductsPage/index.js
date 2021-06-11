import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks'
import { ProductCard } from './ProductCard'
import { GET_PRODUCTS }  from '../../requests/product/query.js'
import { useStyles }  from './styles'

export const  Products = ({setCurrentPage}) => {
    const classes = useStyles();

    const { loading, error, data}  = useQuery(GET_PRODUCTS);
    

    return (
        !loading ?
        <main>
            <Grid container justify="center" spacing={4}>
                {
                    data.products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </main> : 
        <h1> Loadinng </h1>


        
    )
}
