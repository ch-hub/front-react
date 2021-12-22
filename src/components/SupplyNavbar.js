import React, { Component } from 'react';

class SupplyNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-darkbg-dark flex-md-nowrap p-0 shadow">
        <div className="navbar-brand col-sm-3 col-md-2 mr-0">Supply Chain</div>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            {/*<small className="text-secondary">*/}
            {/*  <small id="account">{this.props.account}</small>*/}
            {/*</small>*/}
          </li>
          <li>{this.props.account}</li>
        </ul>
      </nav>
    );
  }
}

export default SupplyNavbar;
