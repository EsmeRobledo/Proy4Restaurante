import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from '../pages/Home';
import Signin from '../pages/Signin'
import { Switch } from 'react-router';

function App() {
  return (
    <Router>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/signin" component={Signin} exact />
     </Switch>
    </Router>
  );
}

export default App;
