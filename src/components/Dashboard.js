import React, {Component} from 'react';

class Dashboard extends Component {
  render() {
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
                    <h6> 42,305,029 <img width="20px" src="./assets/img/smoke.svg" alt="" /></h6>
                  </div>
                  <div className="col-6 col-auto media-heading wallet-right">
                    <h5>CIRCULATING</h5>
                    <h6> 15,935,939 <img width="20px" src="./assets/img/smoke.svg" alt="" /></h6>
                  </div>
                </div>
                <hr/>

                <div className="row middle-stats">
                  <div className="col-6 col-auto media-heading wallet-left">
                    <h5>REWARD FUND</h5>
                    <h6> 42,305,029 <img width="20px" src="./assets/img/smoke.svg" alt="" /></h6>
                  </div>
                  <div className="col-6 col-auto media-heading wallet-right">
                    <h5>ACCOUNTS</h5>
                    <h6> 2552 <img width="20px" src="./assets/img/mascot.svg" alt="" /></h6>
                  </div>
                </div>
                <hr/>

                <div className="row">
                  <div className="col-6 col-auto media-heading wallet-left">
                    <h4>LAST BLOCK</h4>
                    <h6> 420529<span className="text-muted"> {'(3s)'}</span></h6>
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

export default Dashboard;
