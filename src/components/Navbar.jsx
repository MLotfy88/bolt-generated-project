import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/supplies">Supplies</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/companies">Companies</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
