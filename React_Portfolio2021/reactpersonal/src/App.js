import './App.css';
import Navbar2 from './components/navbar/navbar2';
import Navbar from './components/navbar/Navbar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {

  return (
    <>
<Router>
  <Navbar/>
  <Switch>
    <Route path="/" exact></Route>
  </Switch>
</Router>
    
</>
  );
}

export default App;
