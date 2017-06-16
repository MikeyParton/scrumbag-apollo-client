import React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 5px 5px 20px 5px;
  background-color: ${props => props.theme.pallete.light_grey};
`
export default ({title}) => (
  <HeaderWrapper>
    <strong>{title}</strong>
  </HeaderWrapper>
)
