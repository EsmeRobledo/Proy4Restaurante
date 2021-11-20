import styled from "styled-components";
import {Link} from 'react-router-dom';

export const MenuContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: black;
    color: #fff;
`
export const Icon = styled(Link)`
    color: red;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    font-family: 'Yuji Boku', serif;
    margin-left: 24px;
    margin-top: 10px
    font-weight: bold;
    text-decoration: none;

        @media screen and (max-width: 480px){
            margin-left: 16px;
            margin-top: 8px;
        }
`

export const MenuHeadding = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    padding-top: 30px;
`
export const ProductsWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`

export const DishCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
    padding-top: 20px;
    
`

export const DishImg = styled.img`
    height: 50%;
    width: 250px;
    border-radius: 8px;
    border: 1px solid #ddd;
`

export const DishInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

export const DishTitle = styled.h3`
    font-weight: 400;
    text-align: center;
    font-size: 20px;
    color: red;
`

export const DishDesc = styled.p`
    margin-bottom: 1rem;
    text-align: left;
    font-size: 16px;

`

export const DishPrice = styled.p`
    margin-bottom: 1rem;
    text-align: center;
    font-size: 18px;
    color: red;

`

