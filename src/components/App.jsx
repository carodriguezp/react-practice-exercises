import '../style/App.scss'

import { useState } from "react";

// Creamos la función o componente App. Esta vez lo creamos con una función arrow.
const App = () => {

  let [number, setNumber] = useState('0');

  const handleButtonSum = (ev) => {
    ev.preventDefault(); // para parar la acción por defecto del evento
    console.log('El evento lo ha lanzado la etiqueta: ', ev.target, 'que es', number);
    let number = parseInt(number) + 1;
    setNumber(ev.target.value)
  };

  const handleButtonRest = (ev) => {
    ev.preventDefault(); // para parar la acción por defecto del evento
    console.log('El evento lo ha lanzado la etiqueta: ', ev.target);
    let number = parseInt(number) - 1;
    setNumber(ev.target.value)
  };

  const handleButtonReset = (ev) => {
    ev.preventDefault(); // para parar la acción por defecto del evento

    console.log('El evento lo ha lanzado la etiqueta: ', ev.target);
    number = 0;
    setNumber(ev.target.value)
  };

  // Retornamos todo el código HTML que queremos que React pinte en la página.
  return (
    <div>
      <h1>El contador</h1>

      <p>Contador: <strong>{number}</strong> </p>

      <button onClick={handleButtonSum}>Suma</button>
      <button onClick={handleButtonRest}>Resta</button>
      <button onClick={handleButtonReset}>Reset</button>


    </div>
  );
};

export default App;