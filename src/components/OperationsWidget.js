import React, {Component} from 'react';
import PropTypes from "prop-types";

class OperationsWidget extends Component {
  render() {

    const render_operations = this.props.operations.map((operation, idx) => {
      // const new_opt = {
      //   tx_id: txs.transaction_ids[i],
      //   type: opt[0],
      //   timestamp: block.timestamp,
      //   block_number: block_num
      // };

      const secs_ago = Math.floor(((new Date()).getTime() - (new Date(operation.timestamp + '.000Z')).getTime()) / 1000);

      return (
        <div key={`operation_${idx}`} className="op-element">

          <div className="op-icon">
            <a href="###" data-toggle="modal" data-target="#opsModal">
              <img width="25px" src="./assets/img/checked.svg" alt="" />
            </a>
          </div>
          <div className="op-data">
            <h5 className="op">TX# <a href="###" data-toggle="modal" data-target="#opsModal">{operation.tx_id}</a></h5>
            <h6 className='text-muted'> Block {operation.block_number}</h6>
          </div>
          <div className="op-right">
            <h5 className="op">{secs_ago} sec ago </h5>
            <h6 className="block-middle">{operation.type}</h6>
          </div>
        </div>
      );
    });

    return (
      <div className="card">
        <div className="block-stats-header">OPERATIONS
          <div className="pull-right">
            <a href="operations.html" className="btn btn-success btn-sm">View All</a>
          </div>
        </div>
        <div className="scroll-box">
          {render_operations}
        </div>
      </div>
    );
  }
}

OperationsWidget.propTypes = {
  operations: PropTypes.array.isRequired
};


export default OperationsWidget;
