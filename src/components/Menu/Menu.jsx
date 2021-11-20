import React from 'react'
import {productData, drinksData, dessertData} from '../Menu/Data'
import {MenuContainer, MenuHeadding, ProductsWrap, DishCard, 
    DishImg, DishInfo, DishTitle, DishDesc, DishPrice, Icon} from '../Menu/MenuElements'

  function Menu() {
       return (
         <>
         <MenuContainer>
         <Icon to="/">Ramen House</Icon>
            <MenuHeadding>Elige tu platillo favorito</MenuHeadding>
            <ProductsWrap>
              {productData.map((product, index) => {
                return (
                  <DishCard key={index}>
                    <DishImg src={product.img} alt={product.alt} />
                    <DishInfo>
                      <DishTitle>{product.name}</DishTitle>
                      <DishDesc>{product.desc}</DishDesc>
                      <DishPrice>{product.price}</DishPrice>
                    </DishInfo>
                  </DishCard>
                );
              })}
            </ProductsWrap>
            <MenuHeadding>Nuestros Postres</MenuHeadding>
            <ProductsWrap>
              {dessertData.map((product, index) => {
                return (
                  <DishCard key={index}>
                    <DishImg src={product.img} alt={product.alt} />
                    <DishInfo>
                      <DishTitle>{product.name}</DishTitle>
                      <DishDesc>{product.desc}</DishDesc>
                      <DishPrice>{product.price}</DishPrice>
                    </DishInfo>
                  </DishCard>
                );
              })}
            </ProductsWrap>
            <MenuHeadding>Bebidas</MenuHeadding>
            <ProductsWrap>
              {drinksData.map((product, index) => {
                return (
                  <DishCard key={index}>
                    <DishImg src={product.img} alt={product.alt} />
                    <DishInfo>
                      <DishTitle>{product.name}</DishTitle>
                      <DishDesc>{product.desc}</DishDesc>
                      <DishPrice>{product.price}</DishPrice>
                    </DishInfo>
                  </DishCard>
                );
              })}
            </ProductsWrap>
          </MenuContainer>
       </>
        )
     }
      export default Menu;
