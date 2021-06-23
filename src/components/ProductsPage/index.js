import React from 'react';
import Grid from '@material-ui/core/Grid';
import { ProductCard } from './ProductCard'
import machine from '../../machines/ProductsMachine.js'
import { useMachine } from '@xstate/react'


export const  Products = () => {
  
  const [ state, send ] = useMachine(machine)
  const { products } = state.context
  return (
    state.matches('idle') ?
    <main>
      <Grid container justify="center" spacing={4}>
        {
          products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <ProductCard product={product} send={send} />
              </Grid>
          ))
        }
      </Grid>
    </main> : 
    state.matches('error') ? <h1> Error... </h1> :
    <h1> Loading... </h1> 
  )
}
