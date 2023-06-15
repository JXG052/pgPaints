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
import Footer from './components/Footer.js';
import { Box } from '@mui/material';
import './App.css'





function App() {
  return (
    
    <Box sx={{ width: '100%', overflowX: 'hidden', flexGrow: 1, display: 'block', minHeight: '100vh'}}>

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
      <Footer></Footer>

    </Router>
    </Box>
    
  );
}

export default App;
