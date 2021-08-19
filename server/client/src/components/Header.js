import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return 'Still deciding';
      case false:
        return 'I am logged out';
      default:
        return 'I am logged in';
    }
  };
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to='/' className='left brand-logo'>
            Emailer
          </Link>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth: auth };
}

export default connect(mapStateToProps)(Header);
