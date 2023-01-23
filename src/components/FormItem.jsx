import { getDefaultNormalizer } from '@testing-library/react';
import { useState } from 'react';
import React from 'react';

export default function FormItem(props) {
  const { onInputChange } = props;

  const onChange = (event) => {
    onInputChange(event.target.value);
  };
  return (
    <div className="form__item">
      <label>{props.name}</label>
      <input type="text" onChange={onChange} name={props.name} required />
    </div>
  );
}
