import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
    <HeroBanner  heroBanner={bannerData.length && bannerData[0]} />
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      {console.log(products)}
      {products?.map((product) => <Product />)}
    </div>
    <FooterBanner />
    </>
  )
}

// Función para agarrar los campos desde sanity
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'; // Aquí agarramos todos los productos de sanity
  const products = await client.fetch(query);
  const bannerQuery = '*[_type == "banner"]' // Aquí agarramos el banner (fetch)
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData }
  }
}

export default Home;
