import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});



export const Product = ({data}) => {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardActionArea>
              <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={data.imageUrl}
                  title="Contemplative Reptile"
              />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {data.name}
                </Typography>
                <Grid style={{ width: '100%' }}>
                    <Typography  variant="body1" display="inline" color="textSecondary" component="p" align='left'>
                      <b>Price:</b> {data.price}$
                    </Typography>
                </Grid>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Add to cart
            </Button>
          </CardActions>
        </Card>
  );
}
