import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 5px;
  font-size: 14px;

  > textarea {
    width: 100%;
    border: none;
    resize: none;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }
`

class Card extends React.Component {

  componentDidMount () {
    if (this.props.composing) {
      this.newCardInput.focus()
    }
  }

  renderCardComposer () {
    return (
      <textarea
        onChange={this.props.handleInputChange}
        rows='3'
        ref={(textarea) => { this.newCardInput = textarea }}
      />
    )
  }

  renderCardContents () {
    const { title } = this.props
    return (
      <div>{title}</div>
    )
  }

  render () {
    const { composing } = this.props
    return (
      <CardWrapper>
        { composing ? this.renderCardComposer() : this.renderCardContents() }
      </CardWrapper>
    )
  }
}

export default Card
