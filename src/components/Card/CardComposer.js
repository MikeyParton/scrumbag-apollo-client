import React from 'react'

export default ({ value, handleInputChange }) => (
  <textarea
    onChange={handleInputChange}
    rows='3'
    autoFocus='true'
  />
)
