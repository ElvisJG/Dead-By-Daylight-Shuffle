import React from 'react';

import './survivors.css';

const Survivor = props => {
  return (
    <div className='survivor-card'>
      <div className='survivor-content'>
        <img
          src={require(`../../assets/Survivors/${props.name}.png`)}
          alt={props.name}
          className='survivor-img'
        />
        <div className='perks'>
          {props.perks.map(perk => {
            return (
              <div className='perk' key={perk}>
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
      </div>
    </div>
  );
};

export default Survivor;
