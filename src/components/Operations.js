import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Operations extends Component {
  render() {

    const render_operations = this.props.operations.map((operation, idx) => {
      // const new_opt = {
      //   tx_id: txs.transaction_ids[i],
      //   type: opt[0],
      //   timestamp: block.timestamp,
      //   block_number: block_num
      // };

      return (
        <tr key={`opt_${idx}`} data-toggle="modal" data-target="#opsModal" className="block-date  pointer">
          <td><span className="text-muted">{operation.tx_id}</span></td>
          <td><span className="text-muted">{operation.timestamp}</span></td>
          <td>{operation.type}</td>
        </tr>
      );
    });

    return (
      <div className="projects maximizer title">
        <div className="container">
          <div className="row top-margin">
            <div className="col-sm-12 col-md-10 ml-auto mr-auto card card-profile card-plain">
              <div className="card">

                <div>

                  <table className="table">
                    <thead>
                    <tr>
                      <th>TX#</th>
                      <th scope="col">DATE</th>
                      <th scope="col">TYPE</th>
                    </tr>
                    </thead>
                    <tbody id="lazylist">
                    {render_operations}
                    </tbody>
                  </table>

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

    const { operations } = state.dashboard;

    return {
      ...ownProps,
      operations
    };
  },
  {
  }
)(Operations));
