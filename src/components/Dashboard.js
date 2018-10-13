import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";
import * as actions from "../reducers/actions";

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
              <div className="card">

                <div className="global-stats-header">
                  <img width="50px" src="./assets/img/smoke.svg" alt="" />
                  <span className="market-heading">MARKET CAP OF $1.3 MILLION</span>
                  <div className="pull-right" data-toggle="tooltip" data-placement="top" title=""
                       data-container="body"
                       data-animation="true" data-original-title="Toggle Realtime Updates">
                    <input type="checkbox" name="checkbox" className="bootstrap-switch"
                           data-on-label="ON" data-off-label="OFF" />
                  </div>
                  <div className="price">
                    <h6>$0.13<span className="price-up">(+3.2%) <i className="fa fa-chevron-up"></i></span> @
                      <span className="text-muted">0.00024 BTC</span>
                      <span className="price-down">(-2.5%) <i className="fa fa-chevron-down"></i></span>
                    </h6>
                  </div>
                </div>
                <br/>

                <div className="row">
                  <div className="col-6 col-auto media-heading wallet-left">
                    <h5>TOTAL</h5>
                    <h6>{this.props.current_supply.toFixed(3)} <img width="20px" src="./assets/img/smoke.svg" alt="" /></h6>
                  </div>
                  <div className="col-6 col-auto media-heading wallet-right">
                    <h5>CIRCULATING</h5>
                    <h6>{this.props.circulating_supply.toFixed(3)} <img width="20px" src="./assets/img/smoke.svg" alt="" /></h6>
                  </div>
                </div>
                <hr/>

                <div className="row middle-stats">
                  <div className="col-6 col-auto media-heading wallet-left">
                    <h5>REWARD FUND</h5>
                    <h6>{this.props.post_reward_balance.toFixed(3)} <img width="20px" src="./assets/img/smoke.svg" alt="" /></h6>
                  </div>
                  <div className="col-6 col-auto media-heading wallet-right">
                    <h5>ACCOUNTS</h5>
                    <h6>{this.props.account_count} <img width="20px" src="./assets/img/mascot.svg" alt="" /></h6>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-6 col-auto media-heading wallet-left">
                    <h4>LAST BLOCK</h4>
                    <h6>{this.props.head_block_number}<span className="text-muted"> {'(3s)'}</span></h6>
                  </div>
                  <div className="col-6 col-auto media-heading wallet-right">
                    <h4>OPERATIONS</h4>
                    <h6> 15935939<span className="text-muted"> {'(3ops)'}</span></h6>
                  </div>
                </div>
              </div>

            </div>

            <div className="col-sm-12 col-md-6 ml-auto mr-auto card card-profile card-plain">
              <div className="card">
                <canvas className="tx-chart" id="myChart" width="400" height="200"></canvas>
              </div>
            </div>
          </div>


          <div className="row">

            <div className="col-sm-12 col-md-6 ml-auto mr-auto card card-profile card-plain">
              <div className="card">
                <div className="block-stats-header">
                  BLOCKS
                  <div className="pull-right">
                    <a href="blocks.html" className="btn btn-success btn-sm">View All</a>
                  </div>
                </div>

                <div className="scroll-box">
                  <div className="block-element">
                    <a href="###" data-toggle="modal" data-target="#blockModal" className="block-date">
                      <h5 className="block">BLOCK 425292</h5>
                      <h6> 3 secs ago</h6>
                    </a>
                    <div className="block-data">
                      <h5 className="block">Mined By <a href="https://smoke.io/{witness}"
                                                        target="_blank" rel="noopener noreferrer">@blackman</a></h5>
                      <h6 className="block-middle"> 4 operations</h6>
                      <h6 className='text-muted'> Block Reward 0.34 SMOKE </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 ml-auto mr-auto card card-profile card-plain">
              <div className="card">
                <div className="block-stats-header">OPERATIONS
                  <div className="pull-right">
                    <a href="operations.html" className="btn btn-success btn-sm">View All</a>
                  </div>
                </div>
                <div className="scroll-box">
                  <div className="op-element">

                    <div className="op-icon">
                      <a href="###" data-toggle="modal" data-target="#opsModal">
                        <img width="25px" src="./assets/img/checked.svg" alt="" />
                      </a>
                    </div>
                    <div className="op-data">
                      <h5 className="op">TX# <a href="###" data-toggle="modal" data-target="#opsModal">358958983539...</a></h5>
                      <h6 className='text-muted'> Block 425292 </h6>
                    </div>
                    <div className="op-right">
                      <h5 className="op"> 8 sec ago </h5>
                      <h6 className="block-middle"> Transfer</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(
  (state, ownProps) => {

    let head_block_number = 0.0;
    let current_supply = 0.0;
    let circulating_supply = 0.0;
    let post_reward_balance = 0.0;

    const {gpros, accounts, post_reward_fund} = state.app;
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
    dashboard_init: () => async (dispatch, getState) => {
      try {
        dispatch(actions.setIn('dashboard', ['initing'], true));
        // await actions.sleep(5000);

        const account_count = await actions.get_chainLib().api.getAccountCountAsync();
        dispatch(actions.setIn('dashboard', ['account_count'], account_count));
      } catch (e) {
        console.log(e);
      } finally {
        dispatch(actions.setIn('dashboard', ['initing'], false));
      }
    }
  }
)(Dashboard));
