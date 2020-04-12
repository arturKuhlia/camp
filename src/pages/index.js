import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

import Checkout from '../components/checkout'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <Checkout />
    <div style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
   
  </Layout>
)

export default IndexPage
