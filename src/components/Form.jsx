import React, { useState } from 'react';
import FormItem from './FormItem';
import { nanoid } from 'nanoid';

const initialState = {
  name: '',
  timeZone: '',
};

export default function Form(props) {
  const [clock, setClock] = useState(initialState);
  const [name, setName] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();

    const newClock = {
      ...clock,
      id: nanoid(),
    };
    console.log(newClock);
    props.addClock(newClock);
  };

  const onInputChangeName = (name) => {
    setName(name);
    setClock((prevState) => ({
      ...prevState,
      name: name,
    }));
  };

  const onInputChangeTimeZone = (timeZone) => {
    setTimeZone(timeZone);
    setClock((prevState) => ({
      ...prevState,
      timeZone: timeZone,
    }));
  };

  return (
    <form className={props.className} onSubmit={onSubmit}>
      <FormItem name="Название" onInputChange={onInputChangeName} />
      <FormItem name="Временная зона" onInputChange={onInputChangeTimeZone} />
      <button className="btn" type="submit">
        Добавить
      </button>
    </form>
  );
}
