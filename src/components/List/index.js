import React from 'react'
import ListWrapper from './ListWrapper'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

const AddLink = (props) => {
  <Footer>
    Add a card ...
  </Footer>
}

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Suggestions',
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
    const { cards, composing, title } = this.state
    const { handleInputChange, handleAddClick } = this
    return (
      <ListWrapper>
        <Header {...{title}} />
        <Content {...{cards, composing, handleInputChange}} />
        <Footer {...{handleAddClick}} />
      </ListWrapper>
    )
  }
}
