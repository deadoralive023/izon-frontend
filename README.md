# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)






<!-- ----------------- -->

import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
// import CartItem from './CartItem'


import GET_CART from '../../requests/cart/query.js'

import GET_CATEGORIES from '../../requests/category/query.js'

// import { useQuery, gql } from '@apollo/client';
// import { client } from '../../client'
import { useQuery } from '@apollo/react-hooks'



// const FilledCart = (cart) => {

//     return (
//         <React.Component>
//             <Grid container spacing={3}>
//                 <h1> 2. Showing Cart</h1>
//                 {
//                     cart.items.map((item) => (
//                         <Grid item key={item.id} xs={12} sm={4} md={4} lg={3} >
//                             <CartItem item={item}/>
//                         </Grid>
//                     ))
//                 }
//             </Grid>
//             <div className={classes.cartDetails}>
//                 {
//                     <>
//                         <Typography variant="h4">Subtotal: {cart.subtotal}</Typography><div>
//                             <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
//                             <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
//                         </div>
//                     </>
//                 }
//             </div>

//         </React.Component>
//     )
//  }

export const Cart = ({ setCurrentPage}) => {    

    const {loading, error, data } = useQuery(GET_CART, {variables: {user_id: '1'}});
    // const {loading, error, data } = useQuery(GET_CATEGORIES);
    // const {loading, error, data } = client.useQuery(GET_CATEGORIES);

    // console.log("In Cart Index Component");
    console.log(data);

    if (loading) return 'Loading...';
    if (error) return `Error: ${error.message}`;

    const cart = data.cart;

    const classes = useStyles()
    const isEmpty = !cart.items.length;
    // const EmptyCart = () => (
    //    <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    // )

    return(
        <Container>
            <div className={classes.toolbar} />

            <h1> 1. Showing Cart</h1> 

            <Typography className={classes.title} variant="h3" gutterBottom >Your Shopping Cart</Typography>
            {isEmpty ? <h2>Cart is Empty</h2> : <h2>Cart is NOT Empty</h2> }

            {
                cart.items.map((item) => (
                    <Grid item key={item.id}  >
                        <h4>Item Quantity: {item.quantity}</h4>
                        <h4>Item Price Each: {item.price}</h4>
                        <h4>Item product Name: {item.product.name}</h4>


                    </Grid>
                ))
            }


            {/* <Typography className={classes.title} variant="h3" gutterBottom >Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart cart={cart}/>} */}
        </Container>
    )
}

// const [quantity, setQuantity] = useState(item.quantity);
