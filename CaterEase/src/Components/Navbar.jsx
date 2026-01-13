import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { clearAuth, getRole, isLoggedIn } from "../utils/auth";

export default function Navbar() {
  const navigate = useNavigate();

  const loggedIn = isLoggedIn();
  const role = getRole();

  const handlelogout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <nav className="nav">
      <h2 className="logo">CaterEase</h2>

      <div className="links">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/aboutus" className="link">About Us</NavLink>
        <NavLink to="/services" className="link">Services</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
      </div>

      {/*  role based links */}
      {loggedIn && role === "admin" && <Link to="/admin">Dashboard</Link>}
      {loggedIn && role === "customer" && <Link to="/my-bookings">My Bookings</Link>}

      <div className="actions">
        {!loggedIn ? (
          <>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
            <Link to="/signup">
              <button className="signup-btn">Signup</button>
            </Link>
          </>
        ) : (
          <button onClick={handlelogout}>Logout</button>
        )}
      </div>
    </nav>
  );
}
