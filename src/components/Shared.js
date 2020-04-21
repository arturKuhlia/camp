import styled from 'styled-components'
import { Link } from 'gatsby'
import React from 'react'

export const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  place-content: start;
`

export const StyledFullScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const StyledContentCenterWrapper = styled.div`
  display: flex;
  text-align: center;
  color: #ccc;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0.5vw;
  background-color: rgba(20,35,35,0.4);
  border-radius: 10px;
  
  
`

export const StyledContentWrapperLeft = styled(StyledContentCenterWrapper)`
  max-width: 960px;
  margin: auto 53% auto auto;
`

export const StyledImageWrapper = styled.div`
  max-width: ${props => props.maxWidth || 300}px;
  margin: 0 auto 1.45rem;
`

export const StyledLink = styled(Link)`
  margin-left: 0.32rem;`
  
  
 export const Wrapper =({children}) =>(
  <StyledFullScreenWrapper>
  <StyledContentCenterWrapper
   style={{ margin: `3rem auto`, maxWidth: 600 }}>
       {children}
      </StyledContentCenterWrapper>
    </StyledFullScreenWrapper>
  )