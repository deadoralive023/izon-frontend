import React from 'react';

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
                        <CartItem key={item.id} item={item}/>
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

            {/* <Typography variant="h6" >
              <Box
                  // bgcolor="grey.700"
                  color="black"
                  // p={2}
                  position="relative"
                  top={3}
                  left="66%"
                  zIndex="tooltip"
              >
                  Subtotal ({cart.itemsCount} items): <b>${cart.subTotal}</b>
              </Box>
            </Typography> */}

            </Grid>

            
        </div>
        

  );
}



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import ButtonBase from '@material-ui/core/ButtonBase';

// import GET_CART from '../../requests/cart/query.js'
// import { useQuery } from '@apollo/react-hooks'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: 'auto',
//     maxWidth: 500,
//   },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
// }));

// export const Cart = ({ setCurrentPage}) => {  
//   const classes = useStyles();

//     const {loading, error, data } = useQuery(GET_CART, {variables: {user_id: '1'}});

//     // console.log("In Cart Index Component");
//     // console.log(data);

//     if (loading) return 'Loading...';
//     if (error) return `Error: ${error.message}`;

//     const cart = data.cart;

//     const isEmpty = !cart.items.length;

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2}>
//           <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//             </ButtonBase>
//           </Grid>
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   ID: 1030114
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: 'pointer' }}>
//                   Remove
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">$19.00</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }








// import React from 'react';
// import { Container, Typography, Button, Grid } from '@material-ui/core'
// import useStyles from './styles'

// import GET_CART from '../../requests/cart/query.js'

// import { useQuery } from '@apollo/react-hooks'

// export const Cart = ({ setCurrentPage}) => {    

//     const {loading, error, data } = useQuery(GET_CART, {variables: {user_id: '1'}});

//     // console.log("In Cart Index Component");
//     // console.log(data);

//     if (loading) return 'Loading...';
//     if (error) return `Error: ${error.message}`;

//     const cart = data.cart;

//     // const classes = useStyles()
//     const isEmpty = !cart.items.length;


//     return(
//         <Container>
//             <div>
//             <h1> 1. Showing Cart</h1> 
//             {
//                 cart.items.map((item) => (
//                     <Grid key={item.id}  >
//                         <h4>Item Quantity: {item.quantity}</h4>
//                         <h4>Item Price Each: {item.price}</h4>
//                         <h4>Item product Name: {item.product.name}</h4>
//                     </Grid>
//                 ))
//             }
//             </div>

//         </Container>
//     )
// }





