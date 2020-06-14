import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';

const Header = () => (
  <header>
    <a href="/">
      <h1>WereWatch</h1>
    </a>
  </header>
);

const Footer = () => (
  <footer>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/llastflowers/werewatch">
      <p>GitHub</p>
    </a>
  </footer>
);

export default function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home}/>
      <Footer />
    </Router>
  );
}
