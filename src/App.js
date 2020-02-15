import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';
import Home from "./pages/Home/Home";
import Spin from "./pages/Spin/Spin";

const supportsHistory = 'pushState' in window.history;

function App() {
  return (
      <div className="App">
        <BrowserRouter forceRefresh={!supportsHistory}>
          <Route
              render={({location}) => {
                const {pathname} = location;
                return (
                    <TransitionGroup>
                      <CSSTransition
                          key={pathname}
                          classNames="page"
                          timeout={{
                            enter: 1000,
                            exit: 1000,
                          }}
                      >
                        <Route
                            location={location}
                            render={() => (
                                <Switch>
                                  <Route
                                      exact
                                      path="/"
                                      component={Home}
                                  />
                                  <Route
                                      path="/spin"
                                      component={Spin}
                                  />
                                </Switch>
                            )}
                        />
                      </CSSTransition>
                    </TransitionGroup>
                );
              }}
          />
        </BrowserRouter>
      </div>
  );
}

export default App;
