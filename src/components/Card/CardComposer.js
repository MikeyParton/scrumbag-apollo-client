import React from 'react'
import CardWrapper from './CardWrapper'

export const CardComposer = ({ value, handleInputChange }) => (
  <CardWrapper>
    <textarea
      onChange={handleInputChange}
      rows='3'
      autoFocus='true'
    />
  </CardWrapper>
)
