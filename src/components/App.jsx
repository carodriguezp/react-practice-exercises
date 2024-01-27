import '../style/App.scss'

import { useState } from 'react'; //para que use lo de más abajo

function App() {
  const [colorMode, setMode] = useState(''); //para que setee el valor inicial de colorMode en el div

  const handleDarkMode = () => {
    //condicional
    if (colorMode === 'dark') {
      setMode('light');
    } else {
      setMode('dark');
    }

  };


  return (
    <div className={colorMode}>
      <button onClick={handleDarkMode}>Des/activar el dark mode</button>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum perspiciatis, fugiat excepturi perferendis harum libero aut. Debitis deleniti odio velit commodi laboriosam mollitia, deserunt architecto, culpa harum ut hic vel!</p>

    </div>
  );
}

export default App
