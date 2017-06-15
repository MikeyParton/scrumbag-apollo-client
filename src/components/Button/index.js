import styled from 'styled-components'

export default styled.a`
  border-radius: 4px;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
  color: white;

  ${props => props.primary && 'background-color: #298FCA;'}
  ${props => props.secondary && 'background-color: #0079BF;'}
  ${props => props.confirm && `background-color: ${props.theme.pallete.confirm_light}`}
`
