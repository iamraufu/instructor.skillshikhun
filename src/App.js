import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CMS from './pages/CMS/CMS';
import Courses from './pages/Courses/Courses';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Learners from './pages/Learners/Learners';
import Profile from './pages/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/learners" element={<Learners />} />
      <Route path="/cms" element={<CMS />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<CMS />} />
      <Route path="/register" element={<CMS />} />
    </Routes>
  );
}

export default App;