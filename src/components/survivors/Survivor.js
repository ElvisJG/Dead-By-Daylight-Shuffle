import React from 'react';

import './survivors.css';

const Survivor = props => {
  console.log(props);
  return (
    <div className='survivor-card'>
      <h2>{props.name}</h2>
      <img
        src={require(`../../assets/Survivors/${props.name}.png`)}
        alt={props.name}
        className='survivor-img'
      />
      {props.perks.map(perk => {
        return (
          <div className='perks'>
            <img
              src={require(`../../assets/Perks/Survivor-Perks/${perk}.gif`)}
              alt={perk}
              className='survivor-perk'
            />
            <p>{perk}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Survivor;
