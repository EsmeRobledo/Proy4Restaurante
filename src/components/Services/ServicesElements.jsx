import styled from 'styled-components'
import {Link as LinkR}  from 'react-router-dom'


export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;

    @media screen and (max-width: 768px){
        height: 1300px;
    }

    @media screen and (max-width: 480px){
        height: 1100px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const ServicesCard = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 340px;
    padding: 30px;

    &:hover{
        transform: scale(1.02);
        cursor: pointer;
    }
`
export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`
export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 64px;
    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`
export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color: white;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
    color: white;
`

export const BtnWrap = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
`

export const ServiceReserv = styled(LinkR)`
    font-size: 1rem;
    text-align: center;
    color: white;
    cursor: pointer;
    text-decoration: none;
`