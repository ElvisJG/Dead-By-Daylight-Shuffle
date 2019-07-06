import React from 'react';
import { Link } from 'react-router-dom';

import KillerSelect from './KillerSelect';
import './killersmenu.css';

export default function KillersList(props) {
  return (
    <div className='page'>
      <div>
        <div className='section-title'>
          <h1>All Killers</h1>
        </div>
        <div className='killers'>
          {props.characters.map(kill => {
            return (
              <Link
                to={`/killer/${kill.id}`}
                className='kill-link'
                key={kill.id}
              >
                <KillerSelect
                  name={kill.name}
                  bio={kill.bio}
                  perks={kill.perks}
                  difficulty={kill.difficulty}
                  key={kill.id}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
