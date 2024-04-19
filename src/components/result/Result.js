import React from 'react'
import './Result.css'


const Result = ({total,cantidad,plazo}) => {
  return (
    <>
       <div className='resultado'>
          <h2>Cotizacion:</h2>
          <p>La cantidad solicitada es: $ {cantidad}</p>
          <p>El plazo para pagar son:  {plazo} meses</p>
          <p>Su pago mensual es de: $ {(total / plazo).toFixed(2)}</p>
          <p>Total a pagar: $ {(total).toFixed(2)}</p>
       </div>
         

    
    </>
  )
  
}

export default Result
