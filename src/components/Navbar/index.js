import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Nav = styled.nav`
  background-color: #026AA7;
  padding: 10px;
  color: white;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  display: flex;
`

export default props => (
  <Nav>
    <Button primary>Boards</Button>
    <div>Scrumbag</div>
    <div>
      <Button secondary>+</Button>
      <Button secondary>i</Button>
      <Button secondary>a</Button>
    </div>
  </Nav>
)
