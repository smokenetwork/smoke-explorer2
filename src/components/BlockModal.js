import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BlockModal extends Component {
  render() {
    return (
      <div className="modal fade" id="blockModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div className="modal-dialog priv-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </button>
              <h2 className="title title-up">Block 1324225</h2>
            </div>
            <div className="modal-body">
              <table className="table">
                <tbody>
                <tr>
                  <td><span className="text-muted">Witness</span></td>
                  <td>witness</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Date</span></td>
                  <td>timestamp</td>
                </tr>
                <tr>
                  <td><span className="text-muted">Hash</span></td>
                  <td>block_id</td>
                </tr>
                </tbody>
              </table>
              <div className="block-stats-header">
                OPERATIONS
              </div>
              <div className="op-element">

                <div className="op-icon">
                  <a data-toggle="modal" data-target="#opsModal">
                    <img width="25px" src="./assets/img/checked.svg"/>
                  </a>
                </div>
                <div className="op-data">
                  <h5 className="op">TX# <a data-toggle="modal" data-target="#opsModal">358958983539...</a></h5>
                  <h6 className='text-muted'> Block 425292 </h6>
                </div>
                <div className="op-right">
                  <h5 className="op"> > 8 sec ago </h5>
                  <h6 className="block-middle"> Transfer</h6>
                </div>
              </div>


            </div>
            <div className="modal-footer">
              {/*// <!-- <button type="button" className="btn btn-default">Nice Button</button>*/}
              {/*// <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button> -->*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockModal;
