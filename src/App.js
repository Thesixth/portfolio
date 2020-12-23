import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Cibo from './components/Cibo';
import ReactApp from './components/ReactApp';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/GlobalStyles.css';
import DoctorX from './components/DoctorX';
import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <>
    <Router>
    <ScrollToTop />
    <div className="app">
     <Route path="/" exact component={Home} />
     <Route path="/about" component={About} />
     <Route path="/movie-search" component={ReactApp} />
     <Route path="/doctorX" component={DoctorX} />
     <Route path="/cibo-delizioso" component={Cibo} />
    </div>
    </Router>
    </>
  );
}

export default App;
