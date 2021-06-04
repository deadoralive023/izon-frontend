import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks'

import Category from './Category.js'

import GET_CATEGORIES from '../../requests/category/query.js'

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
  
  export const Categories = () => {
      const [spacing, setSpacing] = React.useState(2);
      const classes = useStyles();
      const handleChange = (event) => {
          setSpacing(Number(event.target.value));
      };
  
      const { loading, error, data}  = useQuery(GET_CATEGORIES);

      if (loading) return 'Loading...';
      if (error) return `Error: ${error.message}`;
  
      return (
        <Grid 
        container 
        className={classes.root} 
        spacing={2}>
          <Grid item xs={12}>
            <Grid 
            container 
            justify="center" 
            spacing={spacing}>
              {data.categories.map((category) => (
                <Grid key={category.id} item>
                    <Category data={category} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
    );
  }
  





// export const CategoriesPage = () => {
// // function CategoriesPage(){
//     return (<>
//         <Header />
//         <Categories />
//     </>)
// }
// // 
// export default CategoriesPage;