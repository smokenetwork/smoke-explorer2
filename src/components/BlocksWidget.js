import React, {Component} from 'react';
import PropTypes from "prop-types";

// const moment = require('moment');

class BlocksWidget extends Component {
  render() {


    const render_blocks = this.props.blocks.map((block, idx) => {
      let opt_count = 0;
      const txs = block.transactions;
      for (const tx of txs) {
        opt_count += tx.operations.length;
      }

      // const block_time = moment(block.timestamp + 'Z').fromNow();
      const secs_ago = Math.floor(((new Date()).getTime() - (new Date(block.timestamp + '.000Z')).getTime()) / 1000);

      return (
        <div key={`block_${block.block_number}`} className="block-element">
          <a href="###" data-toggle="modal" data-target="#blockModal" className="block-date">
            <h5 className="block">BLOCK {block.block_number}</h5>
            <h6>{secs_ago} secs ago</h6>
          </a>
          <div className="block-data">
            <h5 className="block">Mined By <a href={`https://smoke.io/@{block.witness}`} target="_blank"
                                             rel="noopener noreferrer">@{block.witness}</a></h5>
            <h6 className="block-middle">{opt_count} operations</h6>
            <h6 className='text-muted'> Block Reward 0.34 SMOKE </h6>
          </div>
        </div>
      )
    });

    return (
      <div className="card">
        <div className="block-stats-header">
          BLOCKS
          <div className="pull-right">
            <a href="blocks.html" className="btn btn-success btn-sm">View All</a>
          </div>
        </div>

        <div className="scroll-box">
          {render_blocks}
        </div>
      </div>
    );
  }
}

BlocksWidget.propTypes = {
  blocks: PropTypes.array.isRequired
};

export default BlocksWidget;
