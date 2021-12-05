import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from './components/Welcome.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Welcome/>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
