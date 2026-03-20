import { Link } from 'react-router-dom';
import { Shield, LayoutDashboard, Terminal, User, Activity } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar glass">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <Shield className="logo-icon" />
          <span className="logo-text">Gig<span className="gradient-text">Guide</span></span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/demo" className="nav-link">
              <Terminal size={18} />
              <span>Live Demo</span>
            </Link>
          </li>
          <li>
            <Link to="/worker" className="nav-link">
              <User size={18} />
              <span>Worker</span>
            </Link>
          </li>
          <li>
            <Link to="/admin" className="nav-link">
              <Activity size={18} />
              <span>Admin</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
