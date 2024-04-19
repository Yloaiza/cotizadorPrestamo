import "./App.css";
import React,{useState} from "react";
import Form from "./components/form/Form";
import Cotizacion from "./components/cotizacion/Cotizacion";
import Result from "./components/result/Result";

function App() {
  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo]= useState('');
  const [total,setTotal]=useState(0);

  let componente;
  if (total === 0) {
    componente = <Cotizacion/>
  }else{
    componente=<Result total={total} cantidad={cantidad} plazo={plazo} />
  }

  return (
    <>
      <Form 
      cantidad={cantidad} 
      setCantidad={setCantidad}
      plazo={plazo}
      setPlazo={setPlazo} 
      setTotal={setTotal}
      />
      <div>
      {componente}
      </div>
        
    </>
  );
}

export default App;
