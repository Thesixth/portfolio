import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Cibo from './components/Cibo';
import Portfolio from './components/Portfolio';
import ReactApp from './components/ReactApp'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/GlobalStyles.css';


function App() {
  return (
    <>
    <Router>
    <div className="App">
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/movie-search" component={ReactApp} />
     <Route path="/portfolio" component={Portfolio} />
     <Route path="/cibo-delizioso" component={Cibo} />
    </div>
    </Router>
    </>
  );
}

export default App;
