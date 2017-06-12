import React, { Component } from 'react'
import Board from './components/Board'
import Navbar from './components/Navbar'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

class App extends Component {
  render () {
    return (
      <Wrapper>
        <Navbar />
        <Board />
      </Wrapper>
    )
  }
}

export default App
