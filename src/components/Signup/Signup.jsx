import React from 'react'
import { Container, Form, FormContent, FormWrap, Icon, FormH1, FormLabel, FormInput, FormButtom } from '../../pages/SigninElements'
function Signup() {
    return (
        <>
            <Container>
               <FormWrap>
                   <Icon to="/">Ramen House</Icon>
                   <FormContent>
                       <Form action="#">
                           <FormH1>Registrate para poder hacer una reservacion</FormH1>
                           <FormLabel htmlFor='for'>Nombre:</FormLabel>
                           <FormInput type='nombre' required/>
                           <FormLabel htmlFor='for'>Apellido:</FormLabel>
                           <FormInput type='apellido' required/>
                           <FormLabel htmlFor='for'>Email:</FormLabel>
                           <FormInput type='email' required/>
                           <FormLabel htmlFor='for'>Telefono:</FormLabel>
                           <FormInput type='telefono' required/>
                           <FormLabel htmlFor='for'>Contraseña:</FormLabel>
                           <FormInput type='password' required/>
                           <FormButtom type='submit'>Continuar</FormButtom>
                       </Form>
                   </FormContent>
               </FormWrap>
           </Container>
        </>
    )
}

export default Signup
