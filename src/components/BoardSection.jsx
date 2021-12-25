import React from 'react';

const generateInputs = (data) => {
  const inputArr = [];
  for (let i = 0; i < 9; i++) {
    inputArr.push(<input key={i} type="number" min="1" max="9" value={data[i+1]} />);
  }
  return inputArr;
}
export function BoardSection(props) {
  return (
    <div className={`grid section section${props.section}`}>
      {props.data &&
        <React.Fragment>
          {generateInputs(props.data)}
        </React.Fragment>
      }
      </div>
    );
}
