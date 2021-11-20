import React from 'react'
import {Container,FormWrap,Icon, FormContent, Form, FormH1, 
    FormLabel, FormInput, FormButtom, Text, ListReservationWrapp}  from '../Reservations/ReservationsElements'
import { Column1, Column2 } from '../Aboutus/AboutusElement'

function Reservations() {
    return (
        <>
            <Container>
                <Icon to="/">Ramen House</Icon>
               <FormWrap>
                   <FormContent>
                       <Column1>
                            <Form action="#">
                                <FormH1>Datos de la reservacion</FormH1>
                                <FormLabel htmlFor='for'>Nombre:</FormLabel>
                                <FormInput type='nombre' required/>
                                <FormLabel htmlFor='for'>Apellido:</FormLabel>
                                <FormInput type='apellido' required/>
                                <FormLabel htmlFor='for'>Email:</FormLabel>
                                <FormInput type='email' required/>
                                <FormLabel htmlFor='for'>Telefono:</FormLabel>
                                <FormInput type='telefono' required/>
                                <FormLabel htmlFor='for'>Fecha:</FormLabel>
                                <FormInput type='Date' required/>
                                <FormLabel htmlFor='for'>Hora:</FormLabel>
                                <FormInput type='Time' required/>
                                <FormLabel htmlFor='for'>Numero de Personas:</FormLabel>
                                <FormInput type='personas' required/>
                                <FormButtom type='submit'>Agendar Reservacion</FormButtom>
                                <Text>**Para cancelacion de reservaciones favor de realizarla minimo 1 hora antes de la hora indicada</Text>
                            </Form>
                       </Column1>
                       <Column2>
                            <ListReservationWrapp>
                                <FormH1>Datos de la reservacion</FormH1>
                            </ListReservationWrapp>
                        </Column2>
                   </FormContent>
                </FormWrap>
           </Container>
        </>
    )
}

export default Reservations
