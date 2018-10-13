import React, {Component} from 'react';

class Operations extends Component {
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
                      <th>TX#</th>
                      <th scope="col">DATE</th>
                      <th scope="col">TYPE</th>
                    </tr>
                    </thead>
                    <tbody id="lazylist">

                    <tr data-toggle="modal" data-target="#opsModal" className="block-date  pointer">
                      <td><span className="text-muted">1324225</span></td>
                      <td><span className="text-muted">12/10/18 6:45 AM</span></td>
                      <td>Transfer</td>
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

export default Operations;
