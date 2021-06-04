import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks'
import { Product } from './ProductCard'
import GET_PRODUCTS from '../../requests/product/query.js'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 4

  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export const  Products = () => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };

    const { loading, error, data}  = useQuery(GET_PRODUCTS);
    if(!loading){
        return (
            <Grid container className={classes.root} spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={spacing}>
                  {data.products.map((product) => (
                    <Grid key={product.id} item>
                        <Product data={product} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
        );
    }
    else{
        return <h3> Loading Products! </h3>
    }
}
