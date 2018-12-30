import React from 'react';
import './switch-on-off.scss';

const SwtichOnOff = ({ onChange, value }) => {
  const inputEl = React.createRef();
  const onClick = () => {
    const value = inputEl.current.checked;
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <label className='switch-on-off'>
      <input type='checkbox' ref={ inputEl } onClick={ onClick } checked={ value } readOnly />
      <span className='switch-on-off__back'>
        <span className='switch-on-off__toggle'></span>
        <span className='switch-on-off__label switch-on-off__label--on'>ON</span>
        <span className='switch-on-off__label switch-on-off__label--off'>OFF</span>  
      </span>
    </label>
  );
}

export { SwtichOnOff };