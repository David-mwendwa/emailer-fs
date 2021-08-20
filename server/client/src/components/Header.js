import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Payments from './Payments';
import { Fragment } from 'react';

class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>
      default:
        return (
          <Fragment>
            <li key='1'><Payments /></li>
            <li key='2'>
              <a href='/api/logout'>Logout</a>
            </li>
          </Fragment>
        );
    }
  };
  render() {
    return (
      <nav>
        <div className='nav-wrapper'>
          <Link to={this.props.auth ? '/surveys' : '/'} className='left brand-logo'>
            Emailer
          </Link>
          <ul id='nav-mobile' className='right'>
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
