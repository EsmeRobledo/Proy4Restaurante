import React from 'react'
import Icon1 from '../../images/dinein.svg'
import Icon2 from '../../images/takeout1.svg'
import Icon3 from '../../images/delivery1.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, 
    ServicesH2, ServicesP, BtnWrap, ServiceReserv, ServiceBtn } from './ServicesElements';
function Services() {
    return (
        <>
            <ServicesContainer>
                <ServicesH1>Nuestros Servicios</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Dine-in</ServicesH2>
                        <ServicesP>Puedes disfrutar de la comodidad de nuestras instalaciones.</ServicesP>
                        <ServiceReserv to="/">Para tu comodida contamos con reservaciones</ServiceReserv>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Take-out</ServicesH2>
                        <ServicesP>Puedes sollicitar tu orden por telefono o bien ordenar en sitio.</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Delivery</ServicesH2>
                        <ServicesP>Contamos con servicio de entrega a domicilio con el apoyo de uber-eats.</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
                    <BtnWrap>
                          <ServiceBtn to='home' smooth={true} duration={500} spy={true} exact="true" >Back Home</ServiceBtn>
                    </BtnWrap>
            </ServicesContainer>
        </>
    )
}

export default Services
