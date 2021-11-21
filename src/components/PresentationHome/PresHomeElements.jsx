import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {Link as LinkR}  from 'react-router-dom'



export const HomeContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    :before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 50%);
        z-index: 2;
    }
`;

export const HomeBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: #232a34;

`;

export const Homecontent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Homeh1 = styled.h1`
    color: white;
    font-size: 48px;
    text-align: center;
    margin-top: 80px;
    font-family: 'Yuji Boku', serif;
    @media screen and (max-width: 768px){
        font-size: 40px;
    }
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const HomeP = styled.p`
    margin-top: 24px;
    color: white;
    font-size: 24px;
    text-align: center;
    max-width: 900px;

    @media screen and (max-width: 768px){
        font-size: 16px;
    }
    @media screen and (max-width: 480px){
        font-size: 12px;
    }
`;

export const HomeBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
` 

export const Button = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? 'red' : 'black')
    };
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#fff' : 'black')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-item: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#b09f9e')};
        color: ${({dark}) => (dark ? 'black' : '#fff')};
    };
`