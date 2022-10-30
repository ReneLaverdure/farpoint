import styled from 'styled-components'

export const ButtonContainer = styled.button`
    border-radius:5px;
    padding: 8px 12px;
    width: ${(({width}) => width ? `${width}` : '100%')} ;
    border: none;
`