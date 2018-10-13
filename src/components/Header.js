import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light  bg-primary navbar-absolute fixed-top">
        <div class="container">
          <div class="navbar-translate">
            <a class="navbar-brand animsition-link" href="./"><img width="150px" src="assets/img/smokeio.svg"
                                                                   alt="smoke logo"/>Explorer</a>
          </div>
          <div class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto text-right">
            </ul>
            <ul class="nav navbar-nav text-center">
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="Blocks" data-placement="bottom" href="./blocks.html">
                  <img width="33px" src="./assets/img/blocks.svg" alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="Operations" data-placement="bottom" href="./operations.html">
                  <img width="35px" src="./assets/img/list.svg" alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="Witnesses" data-placement="bottom" href="./witnesses.html">
                  <img width="40px" src="./assets/img/mascot.svg" alt="" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" rel="tooltip" title="Back to Smoke.io" data-placement="bottom"
                   href="https://smoke.io">
                  <i class="fa fa-reply-all"></i>
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
