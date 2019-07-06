import React from 'react';

import Survivor from './Survivor';
import './survivors.css';

export default function SurvivorsList(props) {
  return (
    <div className='page'>
      <div>
        <div className='section-title'>
          <h1>All Survivors</h1>
        </div>
        <div className='survivors'>
          {props.characters.map(surv => {
            return (
              <Survivor
                name={surv.name}
                bio={surv.bio}
                perks={surv.perks}
                difficulty={surv.difficulty}
                key={surv.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
