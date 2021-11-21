import React, { useEffect, useState } from 'react';
import ReservationList from './ReservationList';
import Reservations from './Reservations';

import { db} from '../service/firebase';

import {
    setDoc,
    collection,
    onSnapshot,
    doc,
    addDoc
} from 'firebase/firestore';

const Firestore = () => {
    const refDoc = doc(db, 'reservations', 'uXUEn900melebo6TY6M5')
    console.log(refDoc)
    const [edit, setEdit] = useState(false)
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

    const updateId = (id) => setId(id);

    const onUpdate = async (id, values) => {
        if (window.confirm('Aceptar?')) {
            await setDoc(doc(db, 'reservations', id), values)
            alert('Se actualizó satisfactoriamente');
        }
        updateEdit(false)
    }

    const onSave = (values) => {
        console.log('valores es igual a:' + values);
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

    return (
        <div>
            <Reservations
                formData={formData}
                setFormData={setFormData}
                onSave={onSave}
                onUpdate={onUpdate}
                edit={edit}
                id={id}
            />
            <ReservationList
                reservations={reservas}
                setEdit={() => updateEdit(true)}
                updateId={updateId}
                setFormData={setFormData}
            />
        </div>
    )
}

export default Firestore