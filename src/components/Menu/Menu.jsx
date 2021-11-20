import React from 'react'


import {MenuContainer, MenuHeadding, ProductsWrap, DishCard, 
    DishImg, DishInfo, DishTitle, DishDesc, DishPrice} from '../Menu/MenuElements'

function Menu({data}) {
    return (
        <>
           <MenuContainer>
            <MenuHeadding>Elige tu platillo favorito!</MenuHeadding>
            <ProductsWrap>
                {data.map((product, index) => {
                    return (
                        <DishCard>
                            <DishImg src={product.img} alt={product.alt} />
                            <DishInfo>
                                <DishTitle>{product.name}</DishTitle>
                                <DishDesc>{product.desc}</DishDesc>
                                <DishPrice>{product.price}</DishPrice>
                            </DishInfo>
                        </DishCard>
                    )
                })}
            </ProductsWrap>
           </MenuContainer> 
        </>
    )
}

export default Menu
