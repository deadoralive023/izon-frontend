import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core'
import useStyles from './styles'
import CartItem from './CartItem'

export const Cart = ({cart, setCurrentPage}) => {    
    const classes = useStyles()
    const isEmpty = !cart.items.length;
    const EmptyCart = () => (
       <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>
    )

    const FilledCart = () => (
        <>
            <Gird container spacing={3}>
                cart.items.map((item) => (
                    <Grid item key={item.id} xs={12} sm={4} md{4} lg={3} >
                        <CartItem item={item}/>
                    </Grid>
                ))
            </Grid>
            <div className={classes.cartDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal}</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button> 

                </div>
            </div>
        </>
    )

    return(
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom >Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}
