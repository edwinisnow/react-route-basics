import React from 'react';
import './App.css';
import About from './About';
import Navigation from './Navigation';
import Shop from './Shop';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </div>
    </Router>
  );
}

const Home =()=><div>Home Page</div>


export default App;
