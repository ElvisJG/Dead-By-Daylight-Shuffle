import React from 'react';

import './survivors.css';

const Survivor = props => {
  console.log(props);
  return (
    <div className='survivor-card'>
      <h2>{props.name}</h2>
      <img src={`../../assets/Survivors/${props.name}.png`} alt={props.name} />
      {props.perks.map(perk => {
        return (
          <div className='perks'>
            <img src={`../../assets/Perks/${perk}.gif`} alt={perk} />
            <p>{perk}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Survivor;
