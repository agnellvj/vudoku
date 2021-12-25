import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';

export function VudokuControls(props) {
  const [radioValue, setRadioValue] = useState('easy');

  const radios = [
    { name: 'Easy', value: 'easy' },
    { name: 'Medium', value: 'medium' },
    { name: 'Hard', value: 'hard' },
  ];

  return (
    <React.Fragment>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            name="radio"
            variant={'outline-dark'}
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value);
              props.setDifficulty(e.currentTarget.value);
            }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </React.Fragment>
  );
}
