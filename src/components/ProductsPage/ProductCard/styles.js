import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
    margin: '2%'
  },
  media: {
    height: 300,
    padding: '2%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '2%', // 16:9

  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2%', // 16:9

  },
}));
