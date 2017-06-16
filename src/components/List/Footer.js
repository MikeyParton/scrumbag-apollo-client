import React from 'react'
import Button from '../Button'
import styled from 'styled-components'

const Footer = styled.div`
  padding: 20px 5px 5px 5px;
  color: #8c8c8c;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${props => props.theme.pallete.light_grey};
  display: flex;

  // cursor: pointer;
  // &:hover {
  //   color: black;
  //   text-decoration: underline;
  //   background-color: ${props => props.theme.pallete.dark_grey};
  // }
`

export default ({handleAddClick}) => (
  <Footer>
    <Button confirm onClick={handleAddClick}>Add</Button>
  </Footer>
)
