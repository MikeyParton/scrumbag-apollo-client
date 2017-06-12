import React from 'react'
import List from '../List'
import styled from 'styled-components'

const Board = styled.div`
  background-color: rgb(0, 121, 191);
  flex-grow: 1;
  display: flex;
  padding: 20px;
`

export default props => (
  <Board>
    <List />
    <List />
    <List />
  </Board>
)
