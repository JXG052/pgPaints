import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import ArtPage from './pages/ArtPage';
import Catalog from './pages/Catalog';
import Categories from './pages/Categories';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';





function App() {
  return (
    <Router>
      <Navbar />
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
