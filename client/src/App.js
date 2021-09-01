import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import RutaPrincipal from './views/RutaPrincipal';
import Details from './views/Details';
import Form from './views/Form';
import Error404 from './views/Error404';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>Henry Food</h1>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/principal' component={RutaPrincipal} />
        <Route path='/details' component={Details} />
        <Route path='/form' component={Form} />
        <Route path='*' component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
