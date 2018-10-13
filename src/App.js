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
import * as actions from './reducers/actions';
import {dashboard_init} from './components/Dashboard';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.app_init();
  };

  render() {
    if (this.props.initing) {
      return (
        <div className="projects maximizer title">
          <div className="container">
            <div className="row top-margin">
              <div className="col-sm-12 col-md-10 ml-auto mr-auto card card-profile card-plain">
                <div className="card">
                  <div className="ml-auto mr-auto text-center">

                    <h2 className="title">Initing</h2>
                    <p className="description">Please wait for applicaiton to init.</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

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

const app_init = () => async (dispatch, getState) => {
  try {
    dispatch(actions.setIn('app', ['initing'], true));
    // await actions.sleep(2000);

    dispatch(dashboard_init());
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(actions.setIn('app', ['initing'], false));
  }
};

export default withRouter(connect(
  (state, ownProps) => {
    return {
      ...ownProps,
      ...state.app
    };
  },
  {
    app_init
  }
)(App));

