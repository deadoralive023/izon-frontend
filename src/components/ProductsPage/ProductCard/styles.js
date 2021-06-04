
import { makeStyles, createMuiTheme} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        width: 250,
    },
    cardContent: {
        height: 120,
    }
});

export const TypographyTheme = createMuiTheme({
    typography: {
        tmlFontSize: 18,
    }
})

