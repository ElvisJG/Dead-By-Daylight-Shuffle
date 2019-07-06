import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import dbdData from './assets/dbdData.json';

import Nav from './components/Nav/Nav';
import Roll from './components/Roll/Roll';
import Survivors from './components/survivors/SurvivorsList';
import Survivor from './components/survivors/Survivor';
import Killers from './components/killers/KillersList';

export default class App extends Component {
  constructor() {
    super();
    this.state = { dbdData };
  }

  render() {
    const { main, characters } = this.state.dbdData;
    return (
      <div className='app'>
        <Nav />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition timeout={450} classNames='fade' key={location.key}>
                <Switch location={location}>
                  <Route path='/' exact render={() => <Roll main={main} />} />
                  <Route
                    path='/survivors'
                    render={() => (
                      <Survivors characters={characters.survivor} />
                    )}
                  />
                  <Route
                    path='/survivor/:id'
                    render={props => (
                      <Survivor {...props} character={characters.survivor} />
                    )}
                  />
                  <Route
                    path='/killers'
                    render={() => <Killers characters={characters.killer} />}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}
