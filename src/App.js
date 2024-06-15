import yatoro from './yatoro.png'
import './App.css';
import { useState } from 'react';

function App() {
  let [burgerCount, setBurgerCount] = useState(0);

  function onYatoroClick() {
    setBurgerCount(++burgerCount);
  }

  return (
    <div className="app">
      <p>Бургеров уничтожено: { burgerCount }</p>
      <img src={yatoro} className="yatoro-img" alt="logo" onClick={onYatoroClick}/>
    </div>
  );
}

export default App;
