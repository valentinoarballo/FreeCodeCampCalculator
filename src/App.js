import './App.css';
import Boton from './components/boton';
import BotonClear from './components/botonClear';
import Pantalla from './components/pantalla';
import { useState } from 'react';
import {evaluate} from 'mathjs'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const mensaje = () => {
    toast.success('Soy un toast', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input){
      try {
        setInput(evaluate(input));
      }
      catch(err) {
        alert("mete numero che dale")
      }
    } else {
      alert("mete numero che dale")
    }
  };

  return (
    <div className='App'>

      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClear={() => setInput('')}>CE</BotonClear>

          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'> 
        <Boton manejarClic={calcularResultado}>=</Boton>

        </div>
      </div>
      
    </div>
  );
}

export default App;
