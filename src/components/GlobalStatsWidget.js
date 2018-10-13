import React, {Component} from 'react';
import PropTypes from "prop-types";

class GlobalStatsWidget extends Component {
  render() {
    return (
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
    );
  }
}

GlobalStatsWidget.propTypes = {
  current_supply: PropTypes.any,
  circulating_supply: PropTypes.any,
  post_reward_balance: PropTypes.any,
  head_block_number: PropTypes.any
};

export default GlobalStatsWidget;
