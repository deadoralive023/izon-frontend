import React, { useContext } from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons' 
import useStyles from './styles'
import Pager from '../../../context/PagerContext'
import Button from '@material-ui/core/Button';

export const ProductCard = ({product, send}) => {


    function handleClick(){
        setContext((prev) =>  { 
            
            return {...prev, params: {id: product.id} }
         })
        send('ITEM_CLICKED', {setContext: setContext})
    }


    const handleAddItem = () => {
        params.id = product.id
        send('ADD_ITEM_TO_CART', {product_id: product.id})
    };

    const classes = useStyles();
    const [context, setContext] = useContext(Pager)

    return (
        <Card className={classes.root} >
            <CardMedia className={classes.media} component="img" image={product.imageUrl} title={product.name} onClick={handleClick}/>
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
