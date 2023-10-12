import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Main, Admin, Home, Login, Contact } from './pages';
import { Profile, MyBooks } from './components';
import { Navbar } from './components';
import { Footer } from './components';

const App = () => {
  return (
    <>
      <header className='fixed-top d-flex align-items-center' id='header'>
        <Navbar />
      </header>

      <Routes>      
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        
        <Route path='/admin' element={<Admin />}>
          <Route path='profile' element={<Profile />} />
          <Route path='mybooks' element={<MyBooks />} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
      
      <footer className='footer' role='contentinfo'>
        <Footer />
      </footer>
    </>
  );
};

export default App;
