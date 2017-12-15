import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.css';

import './global.css';

import Landing from './components/page/Landing';
import Survey from './components/page/Survey';
import Plan from './components/page/Plan';
import Footer from './components/shared/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/survey" component={Survey} />
        <Route path="/meal-plan" component={Plan} />
        <Footer />
      </div>
    );
  }
}

export default App;
