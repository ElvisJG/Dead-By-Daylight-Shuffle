import React from 'react';

import './killersmenu.css';

const KillerSelect = props => {
  return (
    <div className='killer-card'>
      <div className='killer-content'>
        <img
          src={require(`../../assets/Killers/${props.name}.png`)}
          alt={props.name}
          className='killer-img'
        />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default KillerSelect;
