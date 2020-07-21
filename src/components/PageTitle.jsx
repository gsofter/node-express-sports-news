import { Typography, withStyles } from '@material-ui/core'
const PageTitle = withStyles({
  h1: {
    fontSize: '18pt',
    fontWeight: '700',
  },
  body1: {
    fontStyle: 'italic',
    color: '#a5a5a5',
    marginTop: '10px',
    fontSize: '12pt',
  },
})(Typography)

export default PageTitle
