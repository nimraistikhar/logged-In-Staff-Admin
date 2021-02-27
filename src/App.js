import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { GlobalStyles } from './globalstyles';
import Submission from './components/Submission';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Route exact path="/" component={Submission} />
      <Route path="/dashboard" component={Dashboard} />
    </Router>
  );
}

export default App;
