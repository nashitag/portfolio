import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Welcome from './components/Welcome.js';
import Work from './components/Work.js';
import Awards from './components/Awards.js';
import WorkDetail from './components/WorkDetail.js';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const theme = createTheme({
  palette: {
    primary: {
      main: '#3B3B3B'
    }
  }
});

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}



function App() {
  return (
    <AlertProvider template={AlertTemplate} {...options} >
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={() => <Welcome/>} />
              <Route exact path="/work" component={() => <Work/>} />
              <Route exact path="/work/:id" component={() => <WorkDetail/>} />
              <Route exact path="/awards" component={() => <Awards/>} />
            </Switch>
          </BrowserRouter>
        </div>
      </MuiThemeProvider>
    </AlertProvider>
  );
}

export default App;
