import './App.css';
import React, { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';

function App() {
  return (
    <>
      <Navbar />
      <BookDetails />
    </>
  );
}

export default App;
