import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './views/LandingPage/LandingPage';
import RutaPrincipal from './views/RutaPrincipal/RutaPrincipal';
import Details from './views/Details/Details';
import Form from './views/Form';
import Error404 from './views/Error404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/principal' component={RutaPrincipal} />
        <Route path='/details/:id' component={Details} />
        <Route path='/form' component={Form} />
        <Route path='*' component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
