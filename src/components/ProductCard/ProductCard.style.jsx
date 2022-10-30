import styled from 'styled-components';

export const ProductCardContainer = styled.div`
    background-color: #e4e4e4;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    width: 250px;
    margin: 20px 20px;
    padding: 20px;
    overflow: hidden;
    box-shadow: 10px 10px 14px 0px #c7c7c7cc; 
    border-radius: 5px;
`

export const ProductImage = styled.div`
    width: 250px;
    height: 200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`

export const ProductContent = styled.div`
    display: flex;
    padding: 10px;
    
`