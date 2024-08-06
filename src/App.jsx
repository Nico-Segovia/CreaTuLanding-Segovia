import React, { Fragment } from 'react'; 
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import ContactForm from './components/ContactForm/ContactForm';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar'; 

function App() {

  // Comentario para indicar el uso de React (solución alternativa)
  React.createElement('div'); 

  return (
    <Fragment> 
      <BrowserRouter>
        <NavBar /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/contacto" element={<ContactForm />} /> 
          <Route path="/about" element={<About />} /> 
          {/* ... otras rutas que necesites ... */} 
        </Routes>
        <Outlet /> 
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
