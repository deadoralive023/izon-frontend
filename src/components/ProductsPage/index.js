import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks'
import { ProductCard } from './ProductCard'
import { GET_PRODUCTS }  from '../../requests/product/query.js'
import { useStyles }  from './styles'
import  useStyles from './styles'
import productsMachine from '../../machines/ProductsMachine.js'
import { useMachine } from "@xstate/react";

export const  Products = ({setCurrentPage}) => {
    const classes = useStyles();
    const [state, send] = useMachine(productsMachine)

    const products = state.matches("success") ? state.context.products : null


    function fun(){
        setCurrentPage("Cart");
    }

    return (
        state.matches("success") ?
        <main>
            <Grid container justify="center" spacing={4} onClick={fun}>

                {
                    products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </main> : 
        <h1> Loading </h1>
  
    )
}
