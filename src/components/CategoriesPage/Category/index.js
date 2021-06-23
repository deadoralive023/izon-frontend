import React, {useContext} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import Pager from '../../../context/PagerContext'


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const Category = ({data, send}) => {

    function handleClick(){
      //setContext({'id': data.id})
      send('CATEGORY_SELECTED', {setContext: setContext})
    }
    
    const classes = useStyles();
    const [context, setContext] = useContext(Pager)

    return (
      <Card className={classes.root} onClick={handleClick}>
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
