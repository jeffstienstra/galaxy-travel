import React from 'react'
import {Routes, Route} from 'react-router-dom';

//Routes
import Contact from './routes/Contact'
import Home from './routes/Home'
import Pricing from './routes/Pricing'
import Training from './routes/Training'

// Components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/training' element={<Training />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
