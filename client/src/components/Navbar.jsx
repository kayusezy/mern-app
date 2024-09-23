// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>My MERN App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create">Create Item</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
