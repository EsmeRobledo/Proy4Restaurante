import React from 'react'
import {Container,FormWrap,Icon, FormContent, FormH1, 
        Text, ListReservationWrapp, FormInput, FormButtom, FormLabel, Form }  from '../Reservations/ReservationsElements'
import { Column1, Column2 } from '../Aboutus/AboutusElement'
/*import ReservationList from './ReservationList';*/


const Reservations= ({
    formData,
    setFormData,
    onSave,
    onUpdate,
    id,
    edit
}) => {
    const onSubmit = (e) => {
        e.preventDefault();
        if (edit) {
            onUpdate(id, formData)
        } else {
            onSave(formData)
        }
        setFormData({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            fecha: '',
            hora: '',
            nopersonas: '', 
        })

    }

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
            <Container>
                <Icon to="/">Ramen House</Icon>
              <FormWrap>
                   <FormContent>
                       <Column1>
                            <Form onSubmit={onSubmit}>
                                <FormH1>Datos de la reservacion</FormH1>
                                
                                    <FormLabel >Nombre:</FormLabel>
                                    <FormInput type='text' required value={formData.nombre} name="nombre" onChange={onChange}/>
                               
                                    <FormLabel>Apellido:</FormLabel>
                                    <FormInput type='text' required value={formData.apellido} name="apellido" onChange={onChange}/>
                               
                                    <FormLabel >Email:</FormLabel>
                                    <FormInput type='text' required value={formData.email} name="email" onChange={onChange}/>
                               
                                    <FormLabel >Telefono:</FormLabel>
                                    <FormInput type='text' required value={formData.telefono} name="telefono" onChange={onChange}/>
                               
                                    <FormLabel >Fecha:</FormLabel>
                                    <FormInput type='text' required value={formData.fecha} name="fecha" onChange={onChange}/>
                                
                                    <FormLabel>Hora:</FormLabel>
                                    <FormInput type='text' required value={formData.hora} name="hora" onChange={onChange}/>
                               
                                
                                    <FormLabel>Numero de Personas:</FormLabel>
                                    <FormInput  type='text' required value={formData.nopersonas} name="nopersonas" onChange={onChange}/>
                                
                                <FormButtom  variant="primary" type='submit'>Agendar Reservacion</FormButtom>
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
       
    )
}

export default Reservations
