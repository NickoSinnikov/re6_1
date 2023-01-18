import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Clocks from './components/Clocks';
import { useState } from 'react';

const initialState = [
  { id: 'c1', name: 'Москва', timeZone: '-3' },
  { id: 'c2', name: 'London', timeZone: '0' },
];

function App() {
  const [clocks, setClocks] = useState(initialState);
  const addClock = (data) => {
    setClocks((prevState) => [...prevState, data]);
  };

  return (
    <dev className="container">
      <div className="forms__block">
        <Form className="form__block" addClock={addClock} />
      </div>
      <div className="clock__container">
        {clocks.map((clock) => (
          <Clocks
            key={clock.id}
            id={clock.id}
            title={clock.name}
            timeZone={clock.timeZone}
          />
        ))}
      </div>
    </dev>
  );
}

export default App;
