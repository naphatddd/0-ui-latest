import React, { useState, useEffect } from 'react'
import { Typography, Grid, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CategoryList from './CategoryList'
import ProductItem from './ProductItem'
import axios from 'axios'
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  progress: {
    textAlign: 'center',
  },
}))
function ProductList() {
  const classes = useStyles()
  const [products, setProducts] = useState([])
  const [isloading, setIsloading] = useState(false)
  useEffect(() => {
    setIsloading(true)
    const loadPrducts = async () => {
      const { data } = await axios.get(
        'https://react-api-six.vercel.app/products'
      )
      setProducts(data)
      setIsloading(false)
    }
    loadPrducts()
  }, [])
  return (
    <>
      <Typography variant="h3" component="h1" className={classes.title}>
        All Products
      </Typography>
      <CategoryList />
      {isloading ? (
        <div className={classes.progress}>
          <CircularProgress color="secondary"></CircularProgress>
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <ProductItem key={product.id} {...product}></ProductItem>
          ))}
        </Grid>
      )}
    </>
  )
}

export default ProductList
