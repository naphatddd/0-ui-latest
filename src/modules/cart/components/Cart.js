import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Order from './Order'
import Delivery from './Delivery'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
}))
function Cart() {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h4" component="h1" className={classes.title}>
        Order Summary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={8}>
          <Order />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Delivery />
        </Grid>
      </Grid>
    </>
  )
}

export default Cart
