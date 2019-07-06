import React from 'react';

import Killer from './Killer';
import './killers.css';

export default function SurvivorsList(props) {
  return (
    <div className='page'>
      <div>
        <div className='section-title'>
          <h1>All Killers</h1>
        </div>
        <div className='survivors'>
          {props.characters.map(killer => {
            return (
              <Killer
                name={killer.name}
                bio={killer.bio}
                perks={killer.perks}
                difficulty={killer.difficulty}
                key={killer.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
