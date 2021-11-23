import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;

    @media screen and (max-width: 768px){
        height: 1300px;
    }

    @media screen and (max-width: 480px){
        height: 1100px;
    }
`
export const FormWrap = styled.div`
        display: grid;
        z-index: 1;
        height: 860px;
        width: 100%;
        max-width: 1100px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 24px;
        justify-content: center;

        @media screen and (max-width: 400px){
            height: 80%;
        }
`
export const Icon = styled(Link)`
    color: red;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    font-family: 'Yuji Boku', serif;
    margin-left: 24px;
    margin-top: 10px
    font-weight: bold;
    text-decoration: none;

        @media screen and (max-width: 480px){
            margin-left: 16px;
            margin-top: 8px;
        }
`
export const FormContent = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 768px){
      grid-auto-columns: minmax(1fr);
      align-items: center; 
      grid-template-areas: 'col1 col1' 'col2 col2';
    }
        
`

export const Form = styled.form`
  background: Transparent;
  grid-area: col1;
  max-width: 540px;
  z-index: 1;
  grid-area: col1;
  display: grid;
  margin: 0 auto;
  padding: 60px 12px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px){
      padding: 32px 32px;
  }
  
`

export const FormH1 = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: 28px;
  font-weight: 100;
  text-align: center;
`
export const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 12px;
  color: #fff;
`

export const FormInput =styled.input`
  padding: 5px 5px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid blue;

`

export const FormButtom = styled.button`
  background: red;
  color: white;
  font-size: 16 px;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
  width: 100%;
  
  :hover {
    background-color: #E57373;
  }
`

export const Text = styled.span`
  text-align: left;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    padding: 0 15px;
    max-width: 555px;
  
`
export const ListWrap = styled.div`
  max-width: 555px;
  justify-content: center;

  @media screen and (max-width: 480px){
        height: 80%;
    }
`

export const TableReservations = styled.table`
    max-width: 555px; 
    table-layout: fixed;
    z-index: 2;
    grid-area: col2;
    display: grid;
    margin: 0 auto;
    font-size: 12px;
   
`

export const TabletheadReserv = styled.thead`
  vertical-align: middle;
  font-size: 10px;
  display: table;
`

export const TablethReserv = styled.th`
  background: #de736f;
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
  border: 1px solid #eee;
  padding: 12px 15px;

  &.last {
    border-right: none;
  }
`

export const TabletrReserv = styled.tr`
    color: Black;
    font-size: 14px;
    
    &:hover {
      background: Transparent;
      td {
        color: #555;
      }
    }

`
export const TabletbodyReserv = styled.tbody`
 vertical-align: middle;
  display: table;
`

export const TabletdReserv = styled.td`
  color: #999;
  padding: 12px 15px;
`