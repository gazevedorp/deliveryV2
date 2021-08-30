import React from 'react'
import Head from 'next/head';
import { Container, Title } from '../styles/pages/Home';
import ProductList from '../components/productList';

const Home: React.FC = () => {
  return (
    <Container >
      <Head>
        <title>Delivery v.2.0</title>
        <meta name="description" content="Description" />
      </Head>
      <Title>Cardápio</Title>
      <ProductList />
    </Container>
  )
}

export default Home