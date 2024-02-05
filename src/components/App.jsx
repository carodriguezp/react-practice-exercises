import { useState } from 'react';
import '../style/App.scss';


function App() {

  const [numberA, setNumberA] = useState(0);
  const [numberB, setNumberB] = useState(0);
  const [total, setTotal] = useState(0);
  const [operation, setOperation] = useState("Type");

  const handleNumberA = (ev) => {
    setNumberA(ev.target.value);
  };

  const handleNumberB = (ev) => {
    setNumberB(ev.target.value);
  };


  const handleOperation = (event) => {

    setOperation(event.target.value)

    if (event.target.value === "Suma") {

      setTotal(parseInt(numberA) + parseInt(numberB));

    } else if (event.target.value === "Resta") {

      setTotal(parseInt(numberA) - parseInt(numberB));

    } else if (event.target.value === "Multiplicación") {

      setTotal(parseInt(numberA) * parseInt(numberB));

    } else if (event.target.value === "División") {

      setTotal(parseInt(numberA) / parseInt(numberB));

    }

  }

  const handleReset = () => {
    setNumberA(0);
    setNumberB(0);
    setTotal(0);
    setOperation("Type");
  }

  return (
    <div>
      <h1>La calculadora:</h1>
      <form>
        <label>
          Escribe un número:
          <input
            type="number"
            name="name"
            onChange={handleNumberA}
            value={numberA}
          />
        </label>
        <label>
          Escribe otro número:
          <input
            type="number"
            name="email"
            onChange={handleNumberB}
            value={numberB}
          />
        </label>

        <label htmlFor="operation">
          ¿Qué operación matemática quieres hacer?
        </label>
        <select
          className="input-select"
          name="operation"
          id="operation"
          value={operation}
          onChange={handleOperation}
        >
          <option value="Type">Tipo de operación</option>
          <option value="Suma">Suma</option>
          <option value="Resta">Resta</option>
          <option value="Multiplicación">Multiplicación</option>
          <option value="División">División</option>

        </select>
      </form>
      <p>
        El resultado de la <strong>{operation}</strong> entre <strong>{numberA}</strong> y <strong>{numberB}</strong> es <strong> {total}</strong>.
      </p>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App
