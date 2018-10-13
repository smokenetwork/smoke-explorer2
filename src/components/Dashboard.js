import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import * as actions from "../reducers/actions";
import BlocksWidget from "./BlocksWidget";
import GlobalStatsWidget from "./GlobalStatsWidget";
import OperationsWidget from "./OperationsWidget";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.props.dashboard_init();
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
                    <p className="description">Dashboard initing...</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="projects maximizer title">
        <div className="container">

          <div className="row top-margin">
            <div className="col-sm-12 col-md-6 ml-auto mr-auto card card-profile card-plain">
              <GlobalStatsWidget {...this.props} />
            </div>
            <div className="col-sm-12 col-md-6 ml-auto mr-auto card card-profile card-plain">
              <div className="card">
                <canvas className="tx-chart" id="myChart" width="400" height="200"></canvas>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-12 col-md-6 ml-auto mr-auto card card-profile card-plain">
              <BlocksWidget blocks={this.props.blocks} />
            </div>
            <div className="col-sm-12 col-md-6 ml-auto mr-auto card card-profile card-plain">
              <OperationsWidget />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const dashboard_init = () => async (dispatch, getState) => {
  try {
    dispatch(actions.setIn('dashboard', ['initing'], true));
    // await actions.sleep(5000);

    //
    const gpros = await actions.get_chainLib().api.getDynamicGlobalPropertiesAsync();
    dispatch(actions.setIn('dashboard', ['gpros'], gpros));


    //
    let accounts = await actions.get_chainLib().api.getAccountsAsync(["smoke", "reserve"]);
    let [smoke, reserve] = accounts;
    dispatch(actions.setIn('dashboard', ['accounts'], {smoke, reserve}));

    const account_count = await actions.get_chainLib().api.getAccountCountAsync();
    dispatch(actions.setIn('dashboard', ['account_count'], account_count));

    //
    let post_reward_fund = await actions.get_chainLib().api.getRewardFundAsync("post");
    dispatch(actions.setIn('dashboard', ['post_reward_fund'], post_reward_fund));

    dispatch(dashboard_auto_fetch());
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(actions.setIn('dashboard', ['initing'], false));
  }
};

const dashboard_fetch_gpo = () => async (dispatch, getState) => {
  try {
    const gpros = await actions.get_chainLib().api.getDynamicGlobalPropertiesAsync();
    dispatch(actions.setIn('dashboard', ['gpros'], gpros));
  } catch (e) {
    console.log(e);
  } finally {
  }
};

const dashboard_fetch_block = (block_num) => async (dispatch, getState) => {
  try {
    // const block_header = await actions.get_chainLib().api.getBlockHeaderAsync(block_num);
    // dispatch(actions.setIn('dashboard', ['block_header'], block_header));
    let block = await actions.get_chainLib().api.getBlockAsync(block_num);
    block.block_number = block_num;
    let { blocks } = getState().dashboard;
    // blocks.push(block_header);
    blocks = [block,...blocks].slice(0, 20);

    dispatch(actions.setIn('dashboard', ['blocks'], blocks));
  } catch (e) {
    console.log(e);
  } finally {
  }
};

const dashboard_auto_fetch = () => async (dispatch, getState) => {
  while(true) {
    try {
      // await actions.sleep(30000);
      // dispatch(dashboard_fetch_gpo());

      let {gpros, __current_block} = getState().dashboard;

      if (__current_block <= 0) {
        __current_block = gpros.head_block_number;
        dispatch(actions.setIn('dashboard', ['__current_block'], __current_block));
      }

      while (__current_block <= gpros.head_block_number) {
        dispatch(dashboard_fetch_block(__current_block));
        // await update_block(__current_block);
        __current_block++;
        dispatch(actions.setIn('dashboard', ['__current_block'], __current_block));

        await actions.sleep(1000);
      }

      dispatch(dashboard_fetch_gpo());
      await actions.sleep(1000);
    } catch (e) {
        console.log(e);
    } finally {
      await actions.sleep(10000);
    }
  }
};


export default withRouter(connect(
  (state, ownProps) => {

    let head_block_number = 0.0;
    let current_supply = 0.0;
    let circulating_supply = 0.0;
    let post_reward_balance = 0.0;

    const {gpros, accounts, post_reward_fund} = state.dashboard;
    if (gpros && accounts && post_reward_fund) {
      head_block_number = gpros.head_block_number;
      current_supply = parseFloat(gpros.current_supply.split(" ")[0]);

      const smoke_balance = parseFloat(accounts.smoke.balance.split(" ")[0]);
      const reserve_balance = parseFloat(accounts.reserve.balance.split(" ")[0]);
      circulating_supply = current_supply - smoke_balance - reserve_balance;

      post_reward_balance = parseFloat(post_reward_fund.reward_balance.split(" ")[0]);
    }

    return {
      ...ownProps,
      ...state.dashboard,
      head_block_number,
      current_supply,
      circulating_supply,
      post_reward_balance
    };
  },
  {
    dashboard_init
  }
)(Dashboard));
