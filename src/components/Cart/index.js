import React, { useState, useContext}  from 'react';
import Grid from '@material-ui/core/Grid';
import  GET_CART from '../../requests/cart/query.js'
import { useQuery } from '@apollo/react-hooks'
import {CartItem} from '../../components/Cart/CartItem'
import { Button, Typography , Box}from '@material-ui/core';
import useStyles from './styles';
import { CheckoutModal } from '../CheckoutModal/index.js';

export const Cart = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false)
  function handleClickToCheckout(){
    setIsModalOpen(true)
  }

  const classes = useStyles();
  const [render, setRender] = useState(1);
  console.log(GET_CART);
  const {loading, error, data } = useQuery(GET_CART, {variables: {user_id: '1'}});


  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  const cart = data.cart;
  console.log(isModalOpen)
  const isEmpty = !cart.items.length;

  return (
    <Grid className={classes.root} style={{ margin: 10, shadow:1}} >
      <h2>Shopping Cart</h2>
        <Grid container direction="column" ustify="center" alignItems="flex-end">
          <Typography variant="body2" color="textSecondary">
            <Box justifyContent="flex-end" display="flex">  {/* bgcolor="grey.700" color="white" p={2} position="relative" right= "0%" top={3} left="78.3%"  flexDirection="row-reverse" zIndex="tooltip"*/}
                <b>Price</b>
            </Box>
          </Typography>
          <Grid item >
              {
                cart.items.map((item) => (
                  <Grid key={item.id} item xs={12}  >
                      <CartItem key={item.id} item={item} />
                  </Grid>
                ))
              }  
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: 16 }}>
          <Button variant="contained" color="primary" type="submit" onClick={handleClickToCheckout}> Proceed To Checkout </Button>
        </Grid>
        <Typography variant="h6" >
            <Box color="black" justifyContent="flex-end" display="flex"> {/* bgcolor="grey.700" p={2} position="relative" right= "0%" top={3} left="78.3%" flexDirection="row-reverse" zIndex="tooltip"*/}
              Subtotal ({cart.itemsCount} items): <b>${cart.subTotal}</b>
            </Box>
        </Typography> 
        {isModalOpen && <CheckoutModal />}
    </Grid>
      
  );
}