import './App.scss'

function App() {

  const handleInput = (ev) => {
    ev.preventDefault()


    console.log('La tecla pulsada es (la última pulsada): ', ev.key);

  };

  return (

    <form action="">
      <input type="text" name='text' onKeyUp={handleInput} />
    </form>

  );
}

export default App
