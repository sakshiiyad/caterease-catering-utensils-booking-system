import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminNav = () => {
  const { isAuth, role, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav className="admin-nav">
        <div className="admin-nav-left">
          <h2 className="admin-logo">CaterEase</h2>
          <span className="admin-divider">|</span>
         
          <div className="admin-links">
  <Link to="/admin"><button className="admin-link-btn">Admin Dashboard</button></Link>
  <Link to="/admin/inventory"><button className="admin-link-btn">Inventory</button></Link>
</div>

        </div>

        <div className="admin-nav-right">
          {isAuth && role === "admin" && (
            <button className="admin-btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}

          {!isAuth && (
            <Link to="/login">
              <button className="admin-btn login-btn">Login</button>
            </Link>
          )}
        </div>
      </nav>

      <style>
        {`
          .admin-nav {
            width: 100%;
            background: #ffffff;
            padding: 14px 20px;
            border-bottom: 1px solid #e5e7eb;

            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .admin-nav-left {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .admin-logo {
            font-size: 20px;
            font-weight: 700;
            color: #111827;
            margin: 0;
          }

          .admin-divider {
            color: #9ca3af;
            font-weight: 600;
          }

          .admin-title {
            font-size: 25px;
            font-weight: 600;
            color: #374151;
            margin: 20px;
          }

          .admin-nav-right {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .admin-btn {
            padding: 10px 16px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
          }

          .logout-btn {
            background: #111827;
            color: white;
          }

          .logout-btn:hover {
            background: #000;
          }

          .login-btn {
            background: #2563eb;
            color: white;
          }

          .login-btn:hover {
            background: #1d4ed8;
          }
            .admin-links{
  display: flex;
  gap: 10px;
  align-items: center;
}

.admin-link-btn{
  padding: 9px 14px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  color: #111827;
  transition: 0.2s ease;
}

.admin-link-btn:hover{
  background: #f3f4f6;
}

.admin-link-btn:active{
  transform: scale(0.98);
}

        `}
      </style>
    </>
  );
};

export default AdminNav;
