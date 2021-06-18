import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons' 
import useStyles from './styles'

import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks'
import ADD_ITEM_TO_CART from '../../../requests/cart/mutation';

export const ProductCard = ({product, setCurrentPage}) => {
    const classes = useStyles();
    const [addItemToCart] = useMutation(ADD_ITEM_TO_CART);

    const handleAddItem = () => {
        addItemToCart({ variables: { product_id: product.id} });
        setCurrentPage("Cart");
    };

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} component="img" image={product.imageUrl} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h6" gutterBottom>{product.name.substring(0, 30)}...</Typography>
                    <Typography variant="h5">${product.price}</Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>

                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    // className={classes.button}
                    startIcon={<AddShoppingCart />}
                    onClick = {handleAddItem}

                >
                    Add to Cart
                </Button>

                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}
