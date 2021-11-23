import React from 'react'
import { TiDelete, TiEdit } from 'react-icons/ti';
import {TableReservations, TabletheadReserv, TabletdReserv, TablethReserv, 
    TabletrReserv, TabletbodyReserv} from '../Reservations/ReservationsElements'

const ReservationList = ({reservations, setEdit, updateId, setFormData, onDelete}) => {
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
        <TableReservations striped bordered hover >
            <TabletheadReserv>
                <TabletrReserv>
                    <TablethReserv>Nombre</TablethReserv>
                    <TablethReserv>Apellido</TablethReserv>
                    <TablethReserv>E-Mail</TablethReserv>
                    <TablethReserv>Fecha</TablethReserv>
                    <TablethReserv>Hora</TablethReserv>
                    <TablethReserv>No. Personas</TablethReserv>
                </TabletrReserv>
            </TabletheadReserv>
            <TabletbodyReserv>
                {reservations.map(reserva => (
                    <TabletrReserv key={reserva.id}>
                        <TabletdReserv>{reserva.nombre}</TabletdReserv>
                        <TabletdReserv>{reserva.apellido}</TabletdReserv>
                        <TabletdReserv>{reserva.email}</TabletdReserv>
                        <TabletdReserv>{reserva.fecha}</TabletdReserv>
                        <TabletdReserv>{reserva.hora}</TabletdReserv>
                        <TabletdReserv>{reserva.nopersonas}</TabletdReserv>
                        <TabletdReserv>
                            <TiEdit variant="warning" onClick={() => handleClick(reserva)} className='edit-icon'/> 
                            <TiDelete variant="warning" onClick={()=>onDelete(reserva.id)} className='delete-icon' />
                        </TabletdReserv>
                    </TabletrReserv>
                ))}
            </TabletbodyReserv>
        </TableReservations>
    )
}
export default ReservationList
