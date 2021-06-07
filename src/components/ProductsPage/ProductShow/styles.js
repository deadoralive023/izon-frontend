import { makeStyles } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


export const useStyles = makeStyles({
    container: {
        height: '100%',
        width: '100%',
        marginTop: 100
    },
    heading: {
        fontSize: 38,
        fontWeight: 'bold',
        padding: 5
    },
    description: {
        fontSize: 22,
        color: "gray",
        letterSpacing: 3,
        fontStyle: "italic",
        textAlign: "left",
        padding: 5
    },
    imageContainer: {
        width: 800,
        heigh: 800,
    },
    image: {
        width: '800',
        height: '800'
    },
    button: {
        spacing: 10,
        width: '100%',
        marginTop: 100,
        alignItem: 'center'
    },
    buttonContainer: {
        alignSelf: 'center',
        width: 500
    },
    cartBadge: {
        marginRight: 30
    },
});

export const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `4px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
  }))(Badge);

