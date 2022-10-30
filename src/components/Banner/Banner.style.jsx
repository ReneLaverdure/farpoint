import styled from 'styled-components'

export const BannerContainer = styled.div`
    border-radius: 10px;
    border: #4e4e4e solid 1px;
    height: 250px;
    width: 85% ;
    box-shadow: 10px 10px 14px 0px #c7c7c7cc; 
    background-image:${({image}) => `url(${image})`} ;
    background-position: center ;
    background-repeat: no-repeat ;
    background-size: cover;
`

export const BannerTitle = styled.h2`
    text-align: center ;
    margin: auto;
    margin-top: 6%;
    font-size: 48px ;
    text-transform: capitalize;
    color: white
`