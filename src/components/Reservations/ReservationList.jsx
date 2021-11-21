import React from 'react'
import { Card, Table } from 'react-bootstrap'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiDelete, TiEdit } from 'react-icons/ti';

const ReservationList = ({reservations, setEdit, updateId, setFormData, setDelet, deleteId}) => {
    const handleClick = (values) => {
        updateId(values.id)
        deleteId(values.id)
        setFormData({
            nombre: values.nombre,
            apellido: values.apellido,
            email: values.email,
            telefono: values.telefono,
            fecha: values.fecha,
            hora: values.hora,
            nopersonas: values.nopersonas 
        });
        setEdit();
    }

    const handleClickE = (values) => {
        deleteId(values.id)
        setDelet();
    }

    
    return (
        <Card className="reservation-card" style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto', backgroundColor: 'white' }}>
        <Table striped bordered hover className="reservation-table">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>E-Mail</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>No. Personas</th>
                </tr>
            </thead>
            <tbody>
                {reservations.map(reserva => (
                    <tr key={reserva.id}>
                        <td>{reserva.nombre}</td>
                        <td>{reserva.apellido}</td>
                        <td>{reserva.email}</td>
                        <td>{reserva.fecha}</td>
                        <td>{reserva.hora}</td>
                        <td>{reserva.nopersonas}</td>
                        <td>
                            <TiEdit variant="warning" onClick={() => handleClick(reserva)} className='edit-icon'/> 
                            <TiDelete onClick={() => handleClickE(reserva)} className='delete-icon' />
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Card>
    )
}
export default ReservationList
