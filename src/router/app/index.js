import React from 'react';
import { Route, Link } from 'react-router-dom'
import { Home, About } from '../loadableComponents'

const App = () => (
  <React.Fragment>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </React.Fragment>
)

export default App;