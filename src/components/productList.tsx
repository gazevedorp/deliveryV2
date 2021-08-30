import React from 'react'

import { getProducts } from '../services/api'

import ProductItem from './productItem'

import { Container } from '../styles/components/productList'

const ProductList: React.FC = () => {
    
const data = getProducts();

console.log(data)

    return (
        <Container>
            {
                data ? data.response.res.map(product =>
                    (
                    <ProductItem name={product.nome} image={product.imagem} />
                    )
                ) : 'carregando...'
            }
        </Container>
    )
}

export default ProductList