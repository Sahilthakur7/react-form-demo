import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Step1 } from './components/Step1';
import { Step2 } from './components/Step2';
import { Step3 } from './components/Step3';
import { Result } from './components/Result';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header>
        <Router>
          <Switch exact path="/" component={Step1} />
          <Switch path="/step2" component={Step2} />
          <Switch path="/step3" component={Step3} />
          <Switch path="/result" component={Result} />
        </Router>
      </Header>
    </>
  );
}

export default App;
