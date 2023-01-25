import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { profile, home, about, notFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/profile/:id" component={profile} />
        <Route path="/profile" component={profile} />
        <Route path="/about" component={about} />
        <Route path="/" exact component={home} />
        <Route component={notFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
