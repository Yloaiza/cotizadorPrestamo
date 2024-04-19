import { useState } from 'react';
import './Form.css';
import { calcularTotal } from '../../help';

const Form = ({cantidad,setCantidad,plazo,setPlazo,setTotal}) => {

  const [error,setError]=useState(false)

  const calcularPrestamo= e =>{
    e.preventDefault();
    if(cantidad === 0 || plazo===''){
        setError(true)
    }
    setError(false);

    const total =calcularTotal(cantidad,plazo);
    setTotal(total);
    console.log(total);
  }


  return (
    <>
      <h1>Cotizador de prestamos</h1>


        <form onSubmit={calcularPrestamo}>
         <div className="form-content">
          <div className="form-first-item">
          <label>cantidad de prestamo</label> 
          <input type="number" placeholder="Cantidad del prestamo" 
                onChange={(e)=>setCantidad(e.target.value)}
                />
          </div>


            <div className="form-second-item">
            <label>Plazo a pagar</label>
          <select  onChange={(e)=>setPlazo(e.target.value)}>
            <option value="">Selecciona una opción</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
            </div>
         </div>
        <br/>
          <input type="submit" value="Calcular" className="button"/>
          {(error)?  <p className='error'>Todos los campos son obligatorios</p> : ''}
        </form>

       
    </>
  );
};

export default Form;
