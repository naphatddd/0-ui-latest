import React from 'react'
import {
  Grid,
  Chip,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import currencyFormat from 'utils/currencyFormat'
const useStyles = makeStyles((theme) => ({
  media: {
    height: 150,
  },
  footer: {
    marginTop: theme.spacing(2),
  },
}))
function ProductItem({ id, name, price, desc, image, category }) {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" component="p" color="textSecondary">
              {desc}
            </Typography>
            <Grid
              container
              alignItems="center"
              justify="space-between"
              className={classes.footer}
            >
              <span>{currencyFormat(price)}</span>
              <Chip label={category} size="small" />
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

export default ProductItem
