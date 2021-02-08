import React from 'react'

import ProductList from 'modules/product/components/ProductList'
// import ProductDetails from 'modules/product/components/ProductDetails'
// import Cart from 'modules/cart/components/Cart'

import { Snackbar, Container, Toolbar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 0),
  },
}))
function Content() {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <Container maxWidth="lg">
        <Toolbar />
        <ProductList />
        {/* <ProductDetails /> */}
        {/* <Cart /> */}
        <Snackbar
          open
          message="hello"
          action={
            <Button color="inherit" size="small">
              Close
            </Button>
          }
        ></Snackbar>
      </Container>
    </main>
  )
}

export default Content
