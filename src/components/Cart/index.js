import React, {useState}  from 'react';

import Grid from '@material-ui/core/Grid';
import GET_CART from '../../requests/cart/query.js'
import { useQuery } from '@apollo/react-hooks'
import {CartItem} from '../../components/Cart/CartItem'

import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // width: '100%',
    width: '80vw',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Cart = ({ setCurrentPage}) => {  

  const classes = useStyles();
  const [render, setRender] = useState(1);

  const {loading, error, data } = useQuery(GET_CART, {variables: {user_id: '1'}});

  console.log("In Cart Index Component");
  console.log(data);

  if (loading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  const cart = data.cart;

  const isEmpty = !cart.items.length;

  return (
        <div className={classes.root} style={{ margin: 10, shadow:1}} >
          <h2>Shopping Cart</h2>

            <Grid
              container
              direction="column"
              justify="center"
              // alignItems="center"
              
              alignItems="flex-end"

            >
              <Typography variant="body2" color="textSecondary">
                <Box
                    // bgcolor="grey.700"
                    // color="white"
                    // p={2}
                    // position="relative"
                    // right= "0%"
                    // top={3}
                    // left="78.3%"
                    display="flex" 
                    justifyContent="flex-end"
                    // flexDirection="row-reverse"
                    // zIndex="tooltip"
                >
                  {/* <Box p={1} bgcolor="grey.300"> */}
                    <b>Price</b>
                  {/* </Box> */}
                    
                </Box>
              </Typography>

              <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="flex-start"
                  >
                    
                {cart.items.map((item) => (
                    <Grid key={item.id} item xs={12}  >
                        <CartItem key={item.id} item={item} />
                    </Grid>

                    ))}
                
            </Grid>

            <Typography variant="h6" >
                <Box
                    // bgcolor="grey.700"
                    color="black"
                    // p={2}
                    // position="relative"
                    // right= "0%"
                    // top={3}
                    // left="78.3%"
                    display="flex" 
                    justifyContent="flex-end"
                    // flexDirection="row-reverse"
                    // zIndex="tooltip"
                >
                  {/* <Box p={1} bgcolor="grey.300"> */}
                  Subtotal ({cart.itemsCount} items): <b>${cart.subTotal}</b>
                  {/* </Box> */}
                    
                </Box>
              </Typography>

            </Grid>

            
        </div>
        

  );
}