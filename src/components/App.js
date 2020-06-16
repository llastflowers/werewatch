import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import MovieSearch from './MovieSearch';
import MovieDetail from './MovieDetail';
import Providers from './Providers';
import './reset.css';
import styles from './App.css';

const Header = () => (
  <header>
    <a href="/">
      <h1>Werewatch<img className={styles.werewolf}src="src/assets/werewolf.png"></img></h1>
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
      <Route exact path="/" component={MovieSearch}/>
      <Route path="/:movie_id" component={MovieDetail} />
      <Route path="/:movie_id" component={Providers} />
      <Footer />
    </Router>
  );
}
