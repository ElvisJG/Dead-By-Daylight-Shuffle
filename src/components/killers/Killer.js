import React from 'react';

import './killerpage.css';

export default props => {
  const killer = props.character.find(
    i => String(i.id) === props.match.params.id
  );

  if (!killer) {
    return <div>Searching DBD Database...</div>;
  }
  return (
    <div className='killer-solo'>
      <div className='text-content'>
        <h3>{killer.name}</h3>
        <div className='perks'>
          {killer.perks.map(perk => {
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
        <div className='bottom-content'>
          <strong>{killer.bio}</strong>
          <p>Difficulty: {killer.difficulty}</p>
        </div>
      </div>
      <img
        src={require(`../../assets/Killers/Full Body/${killer.name}.png`)}
        alt={killer.name}
        className='survivor-full-img'
      />
    </div>
  );
};
