import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia} from '@material-ui/core'
import useStyles from './styles'


export const Cart = ({item}) => {

    const classes = useStyles()
    return(
        <Card>
            <CardMedia className={classes.media} image={item.imageurl} alt={item.name} />
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.name}</Typography>
                <Typography variant="h5">{item.line_total}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <div className={classses.buttons}>
                    <Button type="button" size="small">-</Button>
                    // <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small">+</Button>

                </div>
            </CardActions>

        </Card>

    )
}
