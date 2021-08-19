//import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Route path="/" exact component={Landing} />
          <Route path="/surveys" exact component={Dashboard} />
        </div>
      </Router>
    </div>
  );
}

export default App;
