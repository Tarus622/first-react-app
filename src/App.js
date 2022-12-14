import './App.css';
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import UFList from './components/UFList';
import Error from './components/Error404';

function App() {
  return (
    <div className='App'>
      <Link to='/'>HOME</Link>

      <Routes >        
        <Route path='/' element= {<UFList/>} />
        <Route path='*' element= {<Error/>} />
      </Routes>
    </div>
  );
}

export default App;