import React, {Component} from 'react';

class Header extends Component {
  render() {
    return (
      <footer className="footer max-footer">
        <div className="container">
          <nav>
            <ul>
              <li><a href="###" data-toggle="modal" data-target="#myModal2">License</a></li>
              <li><a href="###" data-toggle="modal" data-target="#myModal3">Privacy Privacy</a></li>
              <li><a href="###" data-toggle="modal" data-target="#myModal4">Terms</a></li>
            </ul>
          </nav>
          <div className="copyright">&copy; 2018, Powered by <a href="https://smoke.io" target="_blank" rel="noopener noreferrer">Smoke.io</a>.</div>
        </div>
      </footer>
    );
  }
}

export default Header;
