import styled from "styled-components";


export const MenuContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) /2);
    background: black;
    color: #fff;
`

export const MenuHeadding = styled.h1`
    font-size: clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
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
`

export const DishImg = styled.img`
 height: 300px;
 min-width: 300px;
 max-width: 100%
 box-shadow: 8px 8px #fdc500;
`

export const DishInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;
`

export const DishTitle = styled.h3`
    font-weight: 400;
    font-size: 1.5rem;
`

export const DishDesc = styled.p`
    margin-bottom: 1rem;

`

export const DishPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`

