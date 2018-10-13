import React, {Component} from 'react';
import PropTypes from "prop-types";

class BlocksWidget extends Component {
  render() {
    return (
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
    );
  }
}

BlocksWidget.propTypes = {
  blocks: PropTypes.array.isRequired
};

export default BlocksWidget;
