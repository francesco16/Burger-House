import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Hero from './pages/Hero';
import Error from './pages/Error';
import ScrollIntoView from './components/ScrollIntoView';

function App() {
  return (
    <>
    <ScrollIntoView>
      <Switch>
        <Route exact path="/" component={Hero}/>
        <Route exact path="/home" component={Home}/>
        <Route component={Error}/>
      </Switch>
    </ScrollIntoView>
    </>
  );
}
export default App;
