import { useEffect, useState } from "react";
import callToApi from "../services/api";

const App = () => {
  // Estados

  // Creamos characters para guardar los personajes respondidos por la API, por eso es un array vacío
  const [shows, setShows] = useState([]);
  // Creamos searchName para gestionar el input de búsqueda, por eso es un string vacío
  const [searchName, setSearchName] = useState("");

  // useEffect--lo hacemos porque queremos controlar un bloque de codigo cuando cambie una variable de estado

  useEffect(() => {
    // Aquí podemos poner código JS, por ejemplo podríamos llamar a callToApi dentro de un if

    // Llamamos al API pasando por parámetros el searchName
    callToApi(searchName).then((response) => {
      // Cuando el API responde guardamos los personajes en el estado
      setShows(response);
    });
    // Este useEffect depende de searchName, por eso ponemos [searchName]
    // Cuando la usuaria cambia el searchName este useEffect se vuelve a ejecutar porque necesitamos llamar otra vez a la API para obtener nuevos datos
  }, [searchName]);

  // Eventos

  const handleSearchName = (ev) => {
    // Cuando la usuaria cambia el input guardamos su valor en el estado
    setSearchName(ev.target.value);
  };

  // Renderizado

  const renderShows = () => {
    // Pintamos el listado de personajes respondido por la API
    return shows.map(({ score, name }, index) => {

      // La API no nos devuelve un id para cada personaje, por eso usamos el index que nos da el map
      return <li key={index}>

        <p>Nombre: {name}</p>
        <p>Rating: {score * 100}%</p>

      </li>;
    });
  };

  return (
    <div>
      <h1>Llamar a la API de Series:</h1>

      <form>
        <label htmlFor="name">
          Busca por el nombre de tu serie favorita:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={searchName}
          onChange={handleSearchName}
        />
      </form>

      <h2>Series con el nombre: {searchName}</h2>
      <ul>{renderShows()}</ul>
    </div>
  );
};

export default App;