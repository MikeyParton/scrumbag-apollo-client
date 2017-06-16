import React from 'react'
import styled from 'styled-components'
import { Card, CardComposer } from '../Card'

const ContentWrapper = styled.div`
  max-height: calc(100% - 106px);
  overflow-y: scroll;
  padding: 5px;
  background-color: ${props => props.theme.pallete.light_grey};
`

export default ({cards, composing, handleInputChange}) => (
  <ContentWrapper>
    {
      cards.map(card => {
        return <Card {...card} />
      })
    }
    {
      composing
      && <CardComposer handleInputChange={handleInputChange} />
    }
  </ContentWrapper>
)
