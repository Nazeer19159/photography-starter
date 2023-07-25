import React from 'react';

// IMPORTING COMPONENTS
import Header from './components/Header'
import AnimRoutes from './components/AnimRoutes'

// IMPORTING ROUTER
import { BrowserRouter as Router } from 'react-router-dom';
// IMPORTING FRAMER MOTION
  import { motion } from 'framer-motion';
const App = () => {
  return (
    <Router>
        <Header/>
        <AnimRoutes/>
    </Router>
    )
};

export default App;
