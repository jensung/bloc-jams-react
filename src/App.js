import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <nav className="header">
          <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
          <Link to='/library' style={{ textDecoration: 'none' }}>Library</Link>
         </nav>
         <nav className="main"></nav>
        </header>
        <div id="banner"></div>
        <main>
        <Route exact path="/" component={Logo} />
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}
const Logo = () => <img className="logo" src="/assets/images/bloc_jams_logo.png" alt="Bloc Jams logo" />;


export default App;
