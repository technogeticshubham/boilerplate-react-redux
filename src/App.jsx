import {Route,Link,NavLink,Switch,Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Tutorials from './components/Tutorials';
import TDetails from './components/TDetails';
import NoMatch from './components/NoMatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li className="mainMenu"><NavLink activeClassName="selected" 
        activeStyle={{
          fontWeight: "bold",
          color:"red"
        }}
        to="/home">Home</NavLink></li>
        <li className="mainMenu"><NavLink activeClassName="selected" 
         activeStyle={{
          fontWeight: "bold",
          color:"red"
        }}
        to="/about">About</NavLink></li>
        <li className="mainMenu"><NavLink activeClassName="selected" 
         activeStyle={{
          fontWeight: "bold",
          color:"red"
        }}
        to="/tutorials"
        isActive={(match,location)=>{
          console.log(match,location);
        }}
        >Tutorials</NavLink></li>
        <hr/>
      </ul>
      <Switch>
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>

      <Route path="/home">
      <Home/>
      </Route>
      <Route path="/about">
      <About/>
      </Route>
      <Route path="/tutorials">
      <Tutorials/>
      </Route>
      <Route path="*">
        <NoMatch/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
