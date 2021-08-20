import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import Header from './Header';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route exact path='/' component={Landing} />
            <Route exact path='/surveys' component={Dashboard} />
            <Route exact path='/surveys/new' component={SurveyNew} />
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
