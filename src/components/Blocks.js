import React, {Component} from 'react';
import {connect} from "react-redux";
import {withRouter} from "react-router";

class Blocks extends Component {
  render() {
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
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>

                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>
                    <tr data-toggle="modal" data-target="#blockModal" className="block-date pointer">
                      <td><span className="text-muted">5764591</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td><span className="text-muted">0057f...</span></td>
                      <td>1</td>
                    </tr>

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
    return {
      ...ownProps,
      ...state.blocks
    };
  },
  {
  }
)(Blocks));
