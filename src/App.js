import React, { Component } from 'react'
import Board from './components/Board'
import Navbar from './components/Navbar'
import styled, { injectGlobal, ThemeProvider } from 'styled-components'
import standardTheme from './lib/standardTheme'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={standardTheme}>
        <Wrapper>
          <Navbar />
          <Board />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
