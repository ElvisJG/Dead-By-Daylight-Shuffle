import React from 'react';

import SurvivorSelect from './SurvivorSelect';
import './survivorsmenu.css';

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
              <SurvivorSelect
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
