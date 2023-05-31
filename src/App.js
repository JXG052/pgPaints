import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';





function App() {
  return (
    <Router>




      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Routes>


    </Router>
  );
}

export default App;
