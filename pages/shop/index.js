import React from 'react';
import Layout from '../../components/Layout/Layout';
import Grid from '../../components/Basic/Grid/Grid';
import Product from '../../components/Product/Product';
export default function Shop() {
  function handleAddToCartClick(id) {
    console.log('Clicked:', id);
  }

  let productGrid = (
    <Grid>
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
      <Product handleAddToCart={handleAddToCartClick} />
    </Grid>
  );
  return (
    <Layout title="Shop">
      <div>Shop</div>
      {productGrid}
    </Layout>
  );
}
