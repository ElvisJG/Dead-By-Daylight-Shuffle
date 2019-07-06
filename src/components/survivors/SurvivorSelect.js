import React from 'react';

import './survivorsmenu.css';

const SurvivorSelect = props => {
  return (
    <div className='survivor-card'>
      <div className='survivor-content'>
        <img
          src={require(`../../assets/Survivors/${props.name}.png`)}
          alt={props.name}
          className='survivor-img'
        />
        <h3>{props.name}</h3>
      </div>
    </div>
  );
};

export default SurvivorSelect;

{
  /* <div className='perks'>
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
</div> */
}
