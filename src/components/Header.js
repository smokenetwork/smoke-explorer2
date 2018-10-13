import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light  bg-primary navbar-absolute fixed-top">
        <div className="container">
          <div className="navbar-translate">
            <Link className="navbar-brand animsition-link" to="/"><img width="150px" src="assets/img/smokeio.svg"
                                                                       alt="smoke logo"/>Explorer</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto text-right">
            </ul>
            <ul className="nav navbar-nav text-center">
              <li className="nav-item">
                <Link className="nav-link" rel="tooltip" title="Blocks" data-placement="bottom" to="/blocks">
                  <img width="33px" src="./assets/img/blocks.svg" alt=""/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="tooltip" title="Operations" data-placement="bottom" to="/operations">
                  <img width="35px" src="./assets/img/list.svg" alt=""/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="tooltip" title="Witnesses" data-placement="bottom" to="witnesses">
                  <img width="40px" src="./assets/img/mascot.svg" alt=""/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" rel="tooltip" title="Back to Smoke.io" data-placement="bottom"
                      to="https://smoke.io">
                  <i className="fa fa-reply-all"/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
