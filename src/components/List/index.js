import React from 'react'
import ListWrapper from './ListWrapper'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'

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
  }

  toggleCompose = () => {
    this.setState({ composing: !this.state.composing })
  }

  addCard = () => {
    const { cards, newCardTitle } = this.state
    const newCard = { id: cards.length + 1, title: newCardTitle }
    const newCards = [...cards, newCard]
    this.setState({ cards: newCards, composing: false })
  }

  handleEnter = (event) => {
    if (event.charCode === 13) {
      this.addCard()
    }
  }

  handleInputChange = (event) => {
    this.setState({ newCardTitle: event.target.value })
  }

  render () {
    const {
      cards,
      composing,
      title
    } = this.state

    const {
      handleInputChange,
      addCard,
      toggleCompose,
      handleEnter
    } = this

    return (
      <ListWrapper onKeyPress={composing && handleEnter}>
        <Header {...{title}} />
        <Content {...{cards, composing, handleInputChange}} />
        <Footer {...{addCard, composing, toggleCompose}} />
      </ListWrapper>
    )
  }
}
