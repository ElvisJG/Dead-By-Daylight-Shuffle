import React from 'react';

const Survivor = props => {
  console.log(props);
  return (
    <div className='survivor'>
      <h2>{props.name}</h2>
      <img src={`../../assets/Survivors/${props.name}.png`} alt={props.name} />
      <p>{props.bio}</p>
    </div>
  );
};

export default Survivor;
