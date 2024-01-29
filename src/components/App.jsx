import '../style/App.scss'
import { useState } from 'react';

function App() {

  const [listState, setState] = useState('hidden');

  const handleClick = () => {

    listState === 'shown' ? setState('hidden') : setState('shown')

    // if (listState === 'shown') {
    //   setState('hidden')
    // } else {
    //   setState('shown')
    // }

  }

  return (
    <>
      <header className='header'>
        <nav className='header-nav'>
          <i className="fa-solid fa-bars" onClick={handleClick}></i>

          <div className='header-nav'>
            <i className="fa-solid fa-heart"></i>
            <p>Mi web</p>
          </div>

          <i className="fa-solid fa-magnifying-glass"></i>
        </nav>
      </header>

      <div className='container'>
        <ul className={`list  ${listState}`}>
          <li><i className="fa-solid fa-heart"></i> <p>Elemento de la lista</p></li>
          <li><i className="fa-solid fa-heart"></i> <p>Elemento de la lista</p></li>
          <li><i className="fa-solid fa-heart"></i> <p>Elemento de la lista</p></li>
          <li><i className="fa-solid fa-heart"></i> <p>Elemento de la lista</p></li>
          <li><i className="fa-solid fa-heart"></i> <p>Elemento de la lista</p></li>
        </ul>
      </div>
    </>
  );
}

export default App
