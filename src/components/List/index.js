import React from 'react'
import Card from '../Card'
import styled from 'styled-components'

const List = styled.div`
  background-color: #E2E4E6;
  padding: 5px;
  margin-right: 20px;
  width: 300px;
  border-radius: 5px;
`

export default (props) => (
  <List>
    <strong>
      {props.title}
    </strong>
    <Card title={'first card'} />
    <Card title={'second card'} />
  </List>
)
