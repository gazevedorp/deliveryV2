import React from 'react'

import { baseUrl } from '../services/api'
import { useStore } from "../services/store";

import { Card } from '../styles/components/productsItem'

interface steteProps {
  name: string;
  image: string;
}

const ProductItem: React.FC<steteProps> = (props) => {

  const increasePopulation = useStore(state => state.increasePopulation)
  const counter = useStore(state => state.counter)

  return (
    <Card>
      <p>{props.name}</p>
      <img src={`${baseUrl}/${props.image}`} />
      {counter}
      <button onClick={increasePopulation}>Adicionar</button>
    </Card>
  )
}

export default ProductItem