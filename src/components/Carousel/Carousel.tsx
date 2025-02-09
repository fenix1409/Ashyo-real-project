import React from 'react'
import Hero from '../sections/Hero'
import Banner from '@/src/api/Banner/Banner'
import ProductCart from '../Carts/ProductCart'

const Carousel = () => {
  return (
    <div>
        <section><Hero/></section>
        <section><Banner/></section>
        <section><ProductCart/></section>
    </div>
  )
}

export default Carousel