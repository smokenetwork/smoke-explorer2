import React, {Component} from 'react';
import {withRouter} from 'react-router'
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Blocks from "./components/Blocks";
import Operations from "./components/Operations";
import Witnesses from "./components/Witnesses";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route exact path='/blocks' component={Blocks}/>
          <Route exact path='/operations' component={Operations}/>
          <Route exact path='/witnesses' component={Witnesses}/>
        </Switch>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(
  (state, ownProps) => {
    return {
      ...ownProps,
      ...state.app
    };
  },
  {
  }
)(App));

