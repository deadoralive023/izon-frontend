import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Carousel from 'react-material-ui-carousel'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useQuery } from '@apollo/react-hooks'
import { GET_SHOW_PRODUCT }  from '../../../requests/product/query.js'
import { useStyles, StyledBadge } from './styles.js'


export const ProductShow = () => {
    const classes = useStyles()
    const { loading, error, data}  = useQuery(GET_SHOW_PRODUCT);
    if(!loading){
        const slideImages = [
            data.products[0].imageUrl,
            data.products[1].imageUrl,
            data.products[2].imageUrl
        ];

        return (
            <Grid container justify="space-around" spacing={3} alignItems="flex-start" className={classes.container}>
                <Grid item xs={6} className={classes.imageContainer}>
                    <Carousel>  
                        { 
                            slideImages.map((url, index) => {
                                return <img key={index} src={url} width='800' height='800' />
                            })
                        }
                    </Carousel>
                </Grid>
                <Grid item xs={6} container direction="column" justify="flex-start" alignItems="flex-start">
                    <Typography className={classes.heading}>{data.products[0].name}</Typography>
                    <Typography className={classes.description}>{data.products[0].description}</Typography>
                    <Typography className={classes.heading}>Price: ${data.products[0].price}</Typography>
                    <Grid item className={classes.buttonContainer}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.button}
                            startIcon={ <StyledBadge className={classes.cartBadge} badgeContent={4} color="secondary"> <ShoppingCartIcon /> </StyledBadge> }
                        >
                        Add to Cart
                        </Button>
                    </Grid>
                </Grid>

            </Grid>
        )
    }
    else{
        return <h1>Loading</h1>
    }
}
