import styled from 'styled-components'

export const CartItemContainer = styled.div`
    width: 100%;
    display: flex;
    height: 115px;
    margin: 15px;
    color:white ;

    img {
        border-radius: 10px ;
        width: 130px;
        
    }
`

export const CartItemDetail = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;
    padding: 0 10px;
    font-size: 18px;
    font-weight: 600 ;
`

export const CartControlContainer = styled.div`
    display: flex ;
    width: 90%;
    margin-top: auto;
    justify-content: end;
`

export const CartControl = styled.div`
    margin-left: auto;
    background-color: white;
    border-radius: 10px ;

`

export const CartControlLabel = styled.span`
    background-color: white;
    color: black ;
    font-size: 14px ;
    width:100% ;
`

export const CartControlButton = styled.button`
    background-color: #353535;
    color: white;
    border-radius: 5px;
    border:none;
    height: 100% ;
    
    cursor: pointer;
`

export const RemoveLabel = styled.span`
    cursor: pointer;

`