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

const Category = ({data, send, setCurrentPage, params}) => {

    const classes = useStyles();
    params.id = data.id

    return (
      <Card className={classes.root} onClick={() => send('CATEGORY_SELECTED', {setCurrentPage: setCurrentPage})}>
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
            </CardContent>
          </CardActionArea>
        </Card>
  );
}

export default Category
