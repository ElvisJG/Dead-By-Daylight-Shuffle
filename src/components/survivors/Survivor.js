import React from 'react';

import './survivorpage.css';

export default props => {
  const survivor = props.character.find(
    i => String(i.id) === props.match.params.id
  );

  if (!survivor) {
    return <div>Searching DBD Database...</div>;
  }
  return (
    <div className='survivor-solo'>
      <img
        src={require(`../../assets/Survivors/Full Body/${survivor.name}.png`)}
        alt={survivor.name}
        className='survivor-full-img'
      />
      <div className='text-content'>
        <h3>{survivor.name}</h3>

        <div className='perks'>
          {survivor.perks.map(perk => {
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
        <div className='bottom-content'>
          <strong>{survivor.bio}</strong>
          <p>Difficulty: {survivor.difficulty}</p>
        </div>
      </div>
    </div>
  );
};
