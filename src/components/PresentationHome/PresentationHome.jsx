import React, {useState} from 'react'
import {HomeContainer, HomeBg, VideoBg, Homecontent, 
    Homeh1, HomeP, HomeBtnWrapper, ArrowForward, ArrowRight, Button} from './PresHomeElements'
import Video from '../../videos/video.mp4'


const PresentationHome = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HomeContainer id="home">
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HomeBg>
            <Homecontent>
                <Homeh1>Cocina Asiatica </Homeh1>
                <HomeP>Con la mas alta calidad de ingredientes y con el cuidado especial de nuesto chef,
                      ramen house ofrece un menu especial, un restaurante donde puedes sentir nuestra dedicacion.
                      Nuestro menu se ha convertido en la especialidad de muchos conocedores.
                      Estaremos muy agradecidos en contar con tu visita y comentar como te sientes al degustar nuestros platillos.</HomeP>
             <HomeBtnWrapper>
                <Button to='/reservaciones' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                    Reserva ahora {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
             </HomeBtnWrapper>   
            </Homecontent>
        </HomeContainer>
    )
}

export default PresentationHome
