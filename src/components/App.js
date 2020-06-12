import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';

const Header = () => (
  <header>
    <Link to="/">
      <h1>WereWatch</h1>
    </Link>
  </header>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home}/>
    </Router>
  );
}
