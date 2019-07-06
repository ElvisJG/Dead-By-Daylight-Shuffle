import React from 'react';

import './killers.css';

const Killer = props => {
  return (
    <div className='killer-card'>
      <div className='killer-content'>
        <img
          src={require(`../../assets/Killers/${props.name}.png`)}
          alt={props.name}
          className='killer-img'
        />
        <div className='perks'>
          {props.perks.map(perk => {
            return (
              <div className='perk' key={perk}>
                <img
                  src={require(`../../assets/Perks/Killer-Perks/${perk}.gif`)}
                  alt={perk}
                  className='killer-perk'
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

export default Killer;
