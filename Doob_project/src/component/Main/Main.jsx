import React from 'react'
import Hero from './Hero1/Hero'
import Services from './Services/Services'
import Acquire from './Aquire/Acquire'
import PlanPage from './PlanPage/PlanPage'
import Clients from './Clients/Clients'
import PurchaseDoob from './lastPage/PurchaseDoob'
import Layout from '../Layout/Layout'


function Main() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Acquire />
      <PlanPage />
      <Clients />
      <PurchaseDoob />
    </Layout>
  )
}

export default Main
