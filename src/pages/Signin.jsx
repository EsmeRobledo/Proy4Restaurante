import React from 'react'
import { Container, Form, FormContent, FormWrap, Icon, FormH1, FormLabel, FormInput, FormButtom, Text } from './SigninElements'

function Signin() {
    return (
        <>
           <Container>
               <FormWrap>
                   <Icon to="/">Ramen House</Icon>
                   <FormContent>
                       <Form action="#">
                           <FormH1>Ingresa con tu cuenta</FormH1>
                           <FormLabel htmlFor='for'>Email:</FormLabel>
                           <FormInput type='email' required/>
                           <FormLabel htmlFor='for'>Contraseña:</FormLabel>
                           <FormInput type='password' required/>
                           <FormButtom type='submit'>Continuar</FormButtom>
                           <Text>Olvidaste tu contraseña</Text>
                       </Form>
                   </FormContent>
               </FormWrap>
           </Container>
        </>
    )
}

export default Signin;
