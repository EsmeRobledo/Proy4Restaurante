import React, {useEffect, useState} from 'react'
import {Container,FormWrap,Icon, FormContent, FormH1, 
        Text, FormInput, FormButtom, FormLabel, Form }  from '../Reservations/ReservationsElements'
import { Column1, Column2 } from '../Aboutus/AboutusElement'
import ReservationList from './ReservationList';
import {setDoc, collection, onSnapshot,  doc, addDoc} from 'firebase/firestore';
import { db} from '../service/firebase';


const Reservations= () => {
    const [edit, setEdit] = useState(false)
    const [delet, setDelet] = useState(false)
    const [id, setId] = useState('')
    const [reservas, setReservation] = useState([]);
    const [formData, setFormData] = useState({
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            fecha: '',
            hora: '',
            nopersonas: '' ,
    });

    const updateEdit = (value) => setEdit(value);
    const updatedelet = (value) => setDelet(value);

    const updateId = (id) => setId(id);
    const deleteId = (id) => setId(id);

    const onUpdate = async (id, values) => {
        if (window.confirm('Aceptar?')) {
            await setDoc(doc(db, 'reservations', id), values)
            alert('Se actualizó satisfactoriamente');
        }
        updateEdit(false)
    }

    const removeReserva = async (id, values) => {
        if (window.confirm('Aceptar?')) {
            delete(doc(db, 'reservations', id), values)
            reservas.filter(values => values.id !== id);
            alert('Se ha Eliminado la Reserva');
        }
        updatedelet(false)
        setReservation(reservas)
    }

    const onSave = (values) => {
        addDoc(collection(db, 'reservations'), values);
        alert('Su reservacion se ha agendado satisfactoriamente');
    }

    const getreservas = async () => {
        onSnapshot(collection(db, 'reservations'), (snapshot) => {
            const reservas = [];
            snapshot.forEach(doc => reservas.push({ ...doc.data(), id: doc.id }));
            console.log(reservas)
            setReservation(reservas)
        })
    }

    useEffect(() => {
        getreservas();
    }, [])
    const onSubmit = (e) => {
        e.preventDefault();
        if (edit) {
            onUpdate(id, formData)
        }if(delet){
            removeReserva(id, formData)
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
                                    <FormInput type='email' required value={formData.email} name="email" onChange={onChange}/>
                               
                                    <FormLabel >Telefono:</FormLabel>
                                    <FormInput type='text' required value={formData.telefono} name="telefono" onChange={onChange}/>
                               
                                    <FormLabel >Fecha:</FormLabel>
                                    <FormInput type='date' required value={formData.fecha} name="fecha" onChange={onChange}/>
                                
                                    <FormLabel>Hora:</FormLabel>
                                    <FormInput type='time' required value={formData.hora} name="hora" onChange={onChange}/>
                               
                                
                                    <FormLabel>Numero de Personas:</FormLabel>
                                    <FormInput  type='number' required value={formData.nopersonas} name="nopersonas" onChange={onChange}/>
                                
                                <FormButtom  variant="primary" type='submit'>Agendar Reservacion</FormButtom>
                                <Text>**Para cancelacion de reservaciones favor de realizarla minimo 1 hora antes de la hora indicada</Text>
                            </Form>
                       </Column1>
                       <Column2>
                                <FormH1>Datos de la reservacion</FormH1>
                                <ReservationList
                                    reservations={reservas}
                                    setEdit={() => updateEdit(true)}
                                    updateId={updateId}
                                    setFormData={setFormData}
                                    setDelet={() => updatedelet(true)}
                                    deleteId={deleteId}
                                />
                       </Column2>
                   </FormContent>
                </FormWrap>
           </Container>
       
    )
}

export default Reservations
