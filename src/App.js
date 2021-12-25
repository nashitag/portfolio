import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from './components/Welcome.js';
import Work from './components/Work.js';
import WorkDetail from './components/WorkDetail.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Welcome/>} />
          <Route exact path="/work" component={() => <Work/>} />
          <Route exact path="/work/:id" component={() => <WorkDetail/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
