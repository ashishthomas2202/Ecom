import React from 'react';
import Layout from '../../components/Layout/Layout';
import Grid from '../../components/Basic/Grid/Grid';
import Product from '../../components/Product/Product';
export default function Shop() {
  let productGrid = (
    <Grid>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </Grid>
  );
  return (
    <Layout title="Shop">
      <div>Shop</div>
      {productGrid}
    </Layout>
  );
}
