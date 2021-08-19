import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component  {
  componentDidMount() {
    
  }
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Route path='/' exact component={Landing} />
            <Route path='/surveys' exact component={Dashboard} />
            <Route path='/surveys/new' exact component={SurveyNew} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
