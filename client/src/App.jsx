// src/App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateItem from './components/CreateItem';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Change Switch to Routes */}
        <Route path="/" element={<Home />} /> {/* Change component prop to element */}
        <Route path="/create" element={<CreateItem />} /> {/* Change component prop to element */}
      </Routes>
    </Router>
  );
};

export default App;
