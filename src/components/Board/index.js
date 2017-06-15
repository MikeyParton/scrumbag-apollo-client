import React from 'react'
import List from '../List'
import styled from 'styled-components'

const Board = styled.div`
  background-color: ${props => props.theme.pallete.primary_light};
  flex-grow: 1;
  display: flex;
  padding: 20px;
  align-items: flex-start;
  height: 100%;
`

export default props => (
  <Board>
    <List />
  </Board>
)
