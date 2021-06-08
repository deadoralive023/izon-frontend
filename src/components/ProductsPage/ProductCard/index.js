import React, { useState } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons' 
import useStyles from './styles'


export const ProductCard = ({product, setCurrentPage}) => {
    const classes = useStyles();
    console.log(product)
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
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}
