import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
  import {Wrapper} from "../components/Shared.js"
  


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      
      <Wrapper>
        <h1>Hello World!</h1>
      </Wrapper>
      <Wrapper>
          again boy
      </Wrapper>
       <Wrapper>
          again boy
      </Wrapper>
       <Wrapper>
          again boy
      </Wrapper>

  </Layout>
)

export default IndexPage
