import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Modal2 extends Component {
  render() {
    return (
      <div className="modal fade" id="myModal2" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div className="modal-dialog priv-dialog">
          <div className="modal-content">
            <div className="modal-header justify-content-center">
              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </button>
              <h4 className="title title-up">MIT License</h4>
            </div>
            <div className="modal-body">
              <p>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
                <br/><br/>
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
                <br/><br/>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>
              <h4>Contact Us</h4>
              <p>If you have any questions about this license, please contact us at hello@smoke.network.
                <br/>
                Dated: July 28, 2017</p>
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

export default Modal2;
