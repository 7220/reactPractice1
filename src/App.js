import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { profile, home, about, notFound, } from './pages';
import { Link, NavLink } from './components';

function App() {
  return (
    <BrowserRouter>
      <Link />
      <NavLink />
      <Switch>
        <Route path="/profile/:id" component={profile} />
        <Route path="/profile" component={profile} />
        <Route path="/about" component={about} />
        <Route path="/" component={home} />
        <Route component={notFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
