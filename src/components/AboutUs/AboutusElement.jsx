import styled from 'styled-components'


export const AboutusContainer = styled.div`
    color: #fff;
    /*se puede cambiar el color del fondo de este div mediante un true o flase*/
    background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : 'black')};

    @media screen and (max-width: 768px){
        padding: 100px 0;
    }

`

export const AboutusWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

`

export const AboutusRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    /**esta parte esta super interesante dependiendo de si uno quiere colocar la imagen a la 
    *derecha o a la izquierda sera la posicion que tomara en el archivo con el true la posicion
    *sera a la izquierda y si es false sera a la derecha.*/
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }


`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top:0;
    padding-bottom: 60px;

`

export const Heading  = styled.p`
    color: white;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    margin-bottom: 16px;
`

export const TopLine = styled.h1`
    margin-bottom: 24px;
    font-size: 52px
    line-height: 1.1:
    font-weight: 600;
    color: &{({ lightText}) => (lightText ? 'red' : 'white')};
    /*dependiendo del valor true o false regresara el color indicado*/
    @media screen and (max-width: 480px){
        font-size:32px;
    }
    
`

export const Subtitle = styled.p`
     max-width: 440px;
     margin-bottom: 35px;
     font-size: 18px;
     line-height: 24px;
     color: white;
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding: 10px;
`
