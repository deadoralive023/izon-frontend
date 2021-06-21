import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ProductCard } from './ProductCard'
import { GET_PRODUCTS }  from '../../requests/product/query.js'
import  useStyles from './styles'
import machine from '../../machines/ProductsMachine.js'
import { useMachine } from '@xstate/react'


export const  Products = ({params, setCurrentPage}) => {
  const classes = useStyles();
  const [ state, send ] = useMachine(machine)
  const { products } = state.context

  return (
    state.matches("idle") ?
    <main>
      <Grid container justify="center" spacing={4}>
        {
          products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard product={product} send={send} setCurrentPage={setCurrentPage} params={params} />
              </Grid>
          ))
        }
      </Grid>
    </main> : 
    <h1> Loading... </h1>
  )
}
