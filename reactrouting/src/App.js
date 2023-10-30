import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './My Components/Home';
import ContactUs from './My Components/ContactUs';
import Login from './My Components/Login';
import Registration from './My Components/Registration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
