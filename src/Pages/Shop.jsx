import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import { NewCollection } from '../Components/NewCollections/NewCollection'
import { NewLetter } from '../Components/NewLetter/NewLetter'

export const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollection />
        <NewLetter />
    </div>
  )
}
