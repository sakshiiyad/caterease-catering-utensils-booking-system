import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">CaterEase</h2>

      <div className="links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/aboutus" className="link">About Us</NavLink>
        <NavLink to="/services" className="link">Services</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </div>

      <div className="actions">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Signup</button>
      </div>
    </nav>
  );
}
