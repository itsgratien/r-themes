import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from 'src/components/Home';
import { Private } from 'src/components/Private';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="private" element={<Private />} />
      </Routes>
    </Router>
  );
};

export default App;
