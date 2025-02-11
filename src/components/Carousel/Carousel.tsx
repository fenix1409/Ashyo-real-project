import React from 'react'
import Hero from '../sections/Hero'
import Banner from '@/src/api/Banner/Banner'
import ProductCart from '../Carts/ProductCart'
import Chart from '../ui/Chart'
import { BrandList } from '@/src/api/Brand/Brand'

const Carousel = () => {
  return (
    <div>
      <section><Hero /></section>
      <section><Banner /></section>
      <section><ProductCart /></section>
      <section><BrandList /></section>
      <div><Chart /></div>
    </div>
  )
}

export default Carousel