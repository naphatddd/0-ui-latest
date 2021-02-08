import React from 'react'
import { Grid, Chip } from '@material-ui/core'
function CategoryItem({ Icon, title }) {
  return (
    <Grid item>
      <Chip icon={<Icon />} label={title} clickable color="primary"></Chip>
    </Grid>
  )
}

export default CategoryItem
