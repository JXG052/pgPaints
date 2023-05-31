import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/about.js';
import ArtPage from './pages/ArtPage';
import Catalog from './pages/catalog';
import Categories from './pages/categories';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/navbar';
import RouterBar from './components/RouterBar..js';





function App() {
  return (
    <Router>
      <Navbar />
      <RouterBar />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/artPage" element={<ArtPage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


    </Router>
  );
}

export default App;
