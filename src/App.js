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
    // await actions.sleep(5000);

    //
    const gpros = await actions.get_chainLib().api.getDynamicGlobalPropertiesAsync();
    dispatch(actions.setIn('app', ['gpros'], gpros));

    //
    let accounts = await actions.get_chainLib().api.getAccountsAsync(["smoke", "reserve"]);
    let [smoke, reserve] = accounts;
    dispatch(actions.setIn('app', ['accounts'], {smoke, reserve}));

    //
    let post_reward_fund = await actions.get_chainLib().api.getRewardFundAsync("post");
    dispatch(actions.setIn('app', ['post_reward_fund'], post_reward_fund));

    dispatch(app_auto_fetch());
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(actions.setIn('app', ['initing'], false));
  }
};

const app_fetch_gpo = () => async (dispatch, getState) => {
  try {
    const gpros = await actions.get_chainLib().api.getDynamicGlobalPropertiesAsync();
    dispatch(actions.setIn('app', ['gpros'], gpros));
  } catch (e) {
    console.log(e);
  } finally {
  }
};

const app_auto_fetch = () => async (dispatch, getState) => {
  while(true) {
    await actions.sleep(30000);

    dispatch(app_fetch_gpo());
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
    app_init,
    app_fetch_gpo,
    app_auto_fetch
  }
)(App));

