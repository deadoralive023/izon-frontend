import React, { useContext } from 'react';
import Carousel from 'react-material-ui-carousel'
import {ButtonGroup, Button, Typography, Paper, Grid} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStyles, StyledBadge } from './styles.js'
import { useMachine } from '@xstate/react'
import machine from '../../../machines/ProductShowMachine.js'
import Pager from '../../../context/PagerContext'

export const ProductShow = () => {

  const classes = useStyles()
  const [ context, setContext ] = useContext(Pager)
  const [ state, send ] = useMachine(machine(context.params.id, setContext))
  const { product, item_count} = state.context

  return (
    state.matches('idle') ? 
    <Grid container justify="space-around" spacing={3} alignItems="flex-start" className={classes.container}>
      <Grid item xs={6} className={classes.imageContainer}>
        <Carousel>  
          { 
            [product.imageUrl].map((url, index) => {
                return <img key={index} src={url} width='800' height='800' />
            })
          }
        </Carousel>
      </Grid>
      <Grid item xs={6} container direction="column" justify="flex-start" alignItems="flex-start">
        <Typography className={classes.heading}>{product.name}</Typography>
        <Typography className={classes.description}>{product.description}</Typography>
        <Typography className={classes.heading}>Price: ${product.price}</Typography>
        <ButtonGroup size="small" aria-label="small outlined button group">
          <Button onClick={() => send('INCREMENT_ITEM')}>+</Button>
          <Button disabled>{item_count}</Button>
          <Button onClick={() => send('DECREMENT_ITEM')}>-</Button>
        </ButtonGroup>
        <Grid item className={classes.buttonContainer}>
          <Button
              onClick={() => send('ADD_ITEMS_TO_CART')}
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={ <StyledBadge className={classes.cartBadge} badgeContent={item_count} color="secondary"> <ShoppingCartIcon /> </StyledBadge> }
          >
          Add to Cart
          </Button>
        </Grid>
      </Grid>
    </Grid> :
    <h2>Loading</h2>
  )
}
