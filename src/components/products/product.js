import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/core/styles';

import {useStyles, TypographyTheme } from '../../styles/product.js'


export const Product = ({data}) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardActionArea>
              <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="200"
                  image={data.imageUrl}
                  title="Contemplative Reptile"
              />
            <CardContent className={classes.cardContent}>
                <ThemeProvider theme={TypographyTheme}>
                    <Typography>
                      {data.name}
                    </Typography>
                    <Typography  variant="body1" display="inline" color="textSecondary" component="p">
                      <b>Price:</b> {data.price}$
                    </Typography>
                </ThemeProvider>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </CardActions>
        </Card>
  );
}