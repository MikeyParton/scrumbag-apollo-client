import styled from 'styled-components'

export default styled.div`
  background-color: white;
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 5px;
  font-size: 14px;
  min-height: 50px;

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
