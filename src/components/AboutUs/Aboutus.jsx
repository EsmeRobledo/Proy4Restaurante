import React from 'react'
import { Button } from '../ButtonElement'
import Icon2 from '../../images/homemade-ramen.jpg'
import {AboutusContainer, AboutusWrapper, AboutusRow,Column1, 
    Column2, TextWrapper, TopLine, ImgWrap, 
    Heading, Subtitle, BtnWrap,Img } from '../AboutUs/AboutusElement'


const Aboutus = ({lightBg, id, imgStart, topLine, lightText, darkText, 
    headline, description, buttonLabel, primary, dark, dark2 }) => {
    return (
        <>
            <AboutusContainer lightBg={lightBg} id={id}>
                <AboutusWrapper>
                    <AboutusRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home' smooth={true} duration={500} spy={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}>{buttonLabel}</Button>
                          </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Icon2} />
                            </ImgWrap>
                        </Column2>
                    </AboutusRow>
                </AboutusWrapper>
            </AboutusContainer>
        </>
    )
}

export default Aboutus