import './App.css';
import Home from './Home page/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Menu from "./menu page/Menu.js";
import Gallery from "./Gallery/Gallery";
import Event from "./EVEN/Events";
import Contact from "./Contact/Contact";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Menu"  component={Menu} />
          <Route path="/Event"  component={Event} />
          <Route path="/Gallery"  component={Gallery} />
          <Route path="/Contact"  component={Contact} />
        </Switch>  
      </Router>
    </div>
  );
}
export default App;
