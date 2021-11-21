import React from 'react'
import { Card, Table, Button } from 'react-bootstrap'
const ReservationList = ({reservations, setEdit, updateId, setFormData}) => {
    const handleClick = (values) => {
        updateId(values.id)
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

    
    return (
        <Card style={{ width: '50%', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1>Lista</h1>
        <br />

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>E-Mail</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Numero de Personas</th>
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
                            <Button variant="warning" onClick={() => handleClick(reserva)}>Editar</Button> {/* Creamos una función que ejecuta handleClick */}
                            <Button variant="danger">Eliminar</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    </Card>
    )
}
export default ReservationList
