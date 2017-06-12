import styled from 'styled-components'

export default styled.a`
  border-radius: 4px;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;

  ${props => props.primary && 'background-color: #298FCA;'}
  ${props => props.secondary && 'background-color: #0079BF;'}
`
