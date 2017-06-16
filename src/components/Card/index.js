import React from 'react'
import CardWrapper from './CardWrapper'
import CardComposer from './CardComposer'
import CardContents from './CardContents'

class Card extends React.Component {

  render () {
    const { composing, title } = this.props
    return (
      <CardWrapper>
        {
          composing
            ? <CardComposer handleInputChange={this.props.handleInputChange} />
            : <CardContents title={title} />
        }
      </CardWrapper>
    )
  }
}

export default Card
