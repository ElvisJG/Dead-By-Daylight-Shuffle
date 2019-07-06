import React from 'react';

import Survivor from './Survivor';

export default function SurvivorsList(props) {
  console.log(props);
  return (
    <div className='page'>
      <div>
        <div className='section-title'>
          <h1>Survivors</h1>
        </div>
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
  );
}
