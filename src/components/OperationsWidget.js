import React, {Component} from 'react';

class OperationsWidget extends Component {
  render() {
    return (
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
    );
  }
}

export default OperationsWidget;
