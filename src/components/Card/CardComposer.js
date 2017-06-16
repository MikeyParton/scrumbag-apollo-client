import React from 'react'
import CardWrapper from './CardWrapper'

export const CardComposer = ({ value, handleInputChange, handleEnter }) => (
  <CardWrapper>
    <textarea
      onChange={handleInputChange}
      onKeyUp={handleEnter}
      rows='3'
      autoFocus='true'
    />
  </CardWrapper>
)
