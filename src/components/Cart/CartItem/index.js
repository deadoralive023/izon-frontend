import React, {useState} from 'react';
import useStyles from './styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

import {UPDATE_ITEM_QUANTITY, REMOVE_ITEM_FROM_CART} from '../../../requests/item/mutation'
import GET_CART from '../../../requests/cart/query.js'

import { useMutation } from '@apollo/react-hooks'

const Numbers = [1,2,3,4,5,6,7,8,9];

export const CartItem = ({item} ) => {  

  const classes = useStyles();

  const [updateItemQuantity, { data }] = useMutation(UPDATE_ITEM_QUANTITY);
  const [removeItemFromCart] = useMutation(REMOVE_ITEM_FROM_CART);

  const [quantity, setQuantity] = useState(item.quantity);


  const handleChange = (event) => {
    setQuantity(event.target.value);
    console.log("In handle Change method", quantity)
  };

  const handleUpdate = () => {
    console.log("In handle Update method", quantity)

    updateItemQuantity({ variables: { item_id: item.id , quantity: quantity} });
  };

  const handleRemove = () => {
    console.log("In handle Remove Item method", quantity)

    removeItemFromCart({ 
      variables: { item_id: item.id},
      refetchQueries: [
        {
          query: GET_CART,
          variables: {user_id: '1'}
        }
      ],

    });

  };

  

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid item >
            <ButtonBase className={classes.image}>
              <img size="large" className={classes.img} alt="complex" src={item.product.imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={10} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h5" >
                    <Box color="primary.main"><b>{item.product.name}</b></Box>
                </Typography>

                <Typography gutterBottom  >
                    <Box color="success.main"><small>In Stock</small></Box>
                </Typography>

                <Typography variant="body2" color="textSecondary">
                  ID: {item.id}
                </Typography>
                
              </Grid>

              <Grid
                item
                // xs={10}
                container
                direction="row"
                justify="flex-start"
                // justify="space-between"
                alignItems="center"
                >

                <Grid item  >
                {/* <Grid item container direction="row" xs={12} > */}

                    <Typography variant="body2" gutterBottom>
                        <FormControl className={classes.formControl}>
                            {/* <h2>Quantity</h2> */}
                            {/* <Grid item xs={4} >  */}
                              <InputLabel id="quantity-select-label">Quantity</InputLabel>
                              <Select
                                  labelId="quantity-select-label"
                                  id="quantity-select"
                                  value={quantity}
                                  // value={this.state.quantity}
                                  // onChange = {event => this.setQuantity(event.target.value)}

                                  onChange={handleChange}
                                  >
                                      Qty:
                                  {Numbers.map((number) => (
                                      <MenuItem key={number} value={number} >
                                      {number}
                                      </MenuItem>
                                  ))}
                              </Select>
                            {/* </Grid> */}

                        </FormControl>
                    </Typography>
                </Grid>


                {/* <Divider orientation="vertical" flexItem /> */}

                <Grid item xs={3}>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      <Button
                          variant="contained"
                          color="primary"
                          size="small"
                          className={classes.button}
                          startIcon={< CloudUploadIcon />}
                          onClick = {handleUpdate}
                      >
                        Update
                      </Button>
                    </Typography>
                </Grid>

                <Grid item xs={3}>
                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            className={classes.button}
                            startIcon={<DeleteIcon />}
                          onClick = {handleRemove}

                        >
                            Remove
                        </Button>
                    </Typography>
                </Grid>


            </Grid>


              
            </Grid>

            <Grid item>
              <Typography variant="h6"> <b> ${item.price} </b></Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      <Divider />
    </div>
  );
}
