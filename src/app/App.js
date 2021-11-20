import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from 'react-router';
import Home from '../pages/Home';
import Signin from '../pages/Signin'
import Menu from '../components/Menu/Menu'
import Reservations from '../components/Reservations/Reservations';



function App() {
  return (
    <Router>
     <Switch>
       <Route path="/" component={Home} exact />
       <Route path="/signin" component={Signin} exact />
       <Route path="/menu"  component={Menu} exact  />
       <Route path="/reservaciones" component={Reservations} exact />
     </Switch>
    </Router>
  );
}

export default App;
