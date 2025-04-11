import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/specials">Specials</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/customers">Customers</Link></li>
        <li><Link to="/chicago">Chicago</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;