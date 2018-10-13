import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Blocks extends Component {
  render() {
    const render_blocks = this.props.blocks.map((block, idx) => {
      let opt_count = 0;
      const txs = block.transactions;
      for (const tx of txs) {
        opt_count += tx.operations.length;
      }

      return (
        <tr key={`block_${block.block_number}`} data-toggle="modal" data-target="#blockModal" className="block-date pointer">
          <td><span className="text-muted">{block.block_number}</span></td>
          <td><span className="text-muted">{block.timestamp}</span></td>
          <td><span className="text-muted">{block.block_id}</span></td>
          <td>{opt_count}</td>
        </tr>
      )
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
                      <th>BLOCK</th>
                      <th scope="col">DATE</th>
                      <th scope="col">HASH</th>
                      <th scope="col">Operations</th>
                    </tr>
                    </thead>
                    <tbody id="lazylist">
                    {render_blocks}
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

    const {blocks} = state.dashboard;

    return {
      ...ownProps,
      blocks
    };
  },
  {
  }
)(Blocks));
