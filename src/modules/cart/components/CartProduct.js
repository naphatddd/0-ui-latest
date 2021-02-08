import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  IconButton,
} from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  product: {
    display: 'flex',
  },
  productDetail: {
    flex: 1,
  },
  image: {
    width: 150,
  },
}))
function CartProduct({ name, image, price }) {
  const classes = useStyles()
  return (
    <Card className={classes.product}>
      <CardMedia image={image} title={name} className={classes.image} />
      <CardContent className={classes.productDetail}>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>{price}</Grid>
          <Grid item>
            <IconButton>
              <Delete />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CartProduct
