import React from 'react'
import Card from '../Card'
import styled from 'styled-components'
import Button from '../Button'

const ListWrapper = styled.div`
  margin-right: 20px;
  width: 300px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
`
const ListHeader = styled.div`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 5px 5px 20px 5px;
  background-color: ${props => props.theme.pallete.light_grey};
`

const ListContent = styled.div`
  max-height: calc(100% - 106px);
  overflow-y: scroll;
  padding: 5px;
  background-color: ${props => props.theme.pallete.light_grey};
`

const ListFooter = styled.div`
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

const AddLink = (props) => {
  <ListFooter>
    Add a card ...
  </ListFooter>
}

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newCardTitle: '',
      composing: false,
      cards: [
        { id: 1, title: 'This is a card in state' }
      ]
    }

    this.handleAddClick = this.handleAddClick.bind(this)
    this.toggleCompose = this.toggleCompose.bind(this)
    this.addCard = this.addCard.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleAddClick () {
    this.state.composing ? this.addCard() : this.toggleCompose()
  }

  toggleCompose () {
    this.setState({ composing: !this.state.composing })
  }

  addCard () {
    const { cards, newCardTitle } = this.state
    const newCard = { id: cards.length + 1, title: newCardTitle }
    const newCards = [...cards, newCard]
    this.setState({ cards: newCards, composing: false })
  }

  handleInputChange (event) {
    this.setState({ newCardTitle: event.target.value })
  }

  render () {
    return (
      <ListWrapper>
        <ListHeader>
          <strong>Suggestions</strong>
        </ListHeader>
        <ListContent>
          {
            this.state.cards.map(card => {
              return <Card {...card} />
            })
          }
          {
            this.state.composing && (
              <Card
                composing
                handleInputChange={this.handleInputChange}
              />
            )
          }
        </ListContent>
        <ListFooter>
          <Button
            confirm
            onClick={this.handleAddClick}
          >
            Add
          </Button>
        </ListFooter>
      </ListWrapper>
    )
  }
}
