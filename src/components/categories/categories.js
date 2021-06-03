import React from 'react';
import GET_CATEGORIES from '../../requests/category/query.js'
import { useQuery } from '@apollo/react-hooks'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'white',
  },
}));

export default function Categories(){
    const classes = useStyles();


    const { loading, error, data}  = useQuery(GET_CATEGORIES);
    if(!loading){
        return (
            <div className={classes.root}>
              <GridList cellHeight={200} spacing={1} className={classes.gridList}>
                {data.categories.map((category) => (
                  <GridListTile key={category.id} cols={category.name ? 2 : 1} rows={category.name ? 2 : 1}>
                    <img src={category.imageUrl} alt={category.name} />
                    <GridListTileBar
                      title={category.name}
                      titlePosition="top"
                      actionIcon={
                        <IconButton aria-label={`star ${category.name}`} className={classes.icon}>
                          <StarBorderIcon />
                        </IconButton>
                      }
                      actionPosition="left"
                      className={classes.titleBar}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div>
      );
    }
    else{
        return <h2> Loading! </h2>
    }
}
