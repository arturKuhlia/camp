import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
 
`;

const Wrapper = styled.section`
  padding: 4em;
  
  height:100vh;

`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1> Hi this is the title i guess</h1>
      <Wrapper>
        <Title>
          Hello World!
        </Title>
      </Wrapper>
      <Wrapper>
        <Title>
          again boy
        </Title>
      </Wrapper>

  </Layout>
)

export default IndexPage
