import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light  bg-primary navbar-absolute fixed-top">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand animsition-link" href="./"><img width="150px" src="assets/img/smokeio.svg"
                                                                   alt="smoke logo"/>Explorer</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto text-right">
            </ul>
            <ul className="nav navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Blocks" data-placement="bottom" href="./blocks.html">
                  <img width="33px" src="./assets/img/blocks.svg" alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Operations" data-placement="bottom" href="./operations.html">
                  <img width="35px" src="./assets/img/list.svg" alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Witnesses" data-placement="bottom" href="./witnesses.html">
                  <img width="40px" src="./assets/img/mascot.svg" alt="" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" rel="tooltip" title="Back to Smoke.io" data-placement="bottom"
                   href="https://smoke.io">
                  <i className="fa fa-reply-all"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
