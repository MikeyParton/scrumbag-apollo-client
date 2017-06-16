import React from 'react'
import Button from '../Button'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  padding: 20px 5px 5px 5px;
  color: #8c8c8c;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: ${props => props.theme.pallete.light_grey};
  display: flex;

  ${props => props.standard && `
    cursor: pointer;
    &:hover {
      color: black;
      text-decoration: underline;
      background-color: ${props.theme.pallete.dark_grey};
    }
  `}
`

const StandardFooter = ({toggleCompose, handleEnter}) => (
  <FooterWrapper
    standard
    onClick={toggleCompose}
  >
    <div>Add a card ...</div>
  </FooterWrapper>
)

const ComposerFooter = ({addCard, toggleCompose}) => (
  <FooterWrapper>
    <Button confirm onClick={addCard}>Add</Button>
  </FooterWrapper>
)

export default ({addCard, composing, toggleCompose, handleEnter}) => (
  <div>
    {
    composing
    ? <ComposerFooter {...{addCard, toggleCompose, handleEnter}} />
    : <StandardFooter {...{toggleCompose}} />
  }
  </div>
)
