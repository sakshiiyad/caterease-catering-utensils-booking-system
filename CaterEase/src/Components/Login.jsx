import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setAuth } from "../utils/auth";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const{login}=useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

   
    const email = formData.email.trim();
    const role = email === "admin@gmail.com" ? "admin" : "customer";

    const token = "mock_token_123"; 
    setAuth( token, role );
      login(role)
    
    if (role === "admin") navigate("/admin");
    else navigate("/my-bookings");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Login</h2>
        <p style={styles.subtitle}>Welcome back to CaterEase </p>

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="admin@gmail.com"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              name="password"
              value={formData.password}
              onChange={handleChange}
              type="password"
              placeholder="******"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.btn}>
            Login
          </button>
        </form>

        <p style={styles.footer}>
          Don’t have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Signup
          </Link>
        </p>

        <div style={styles.mockBox}>
          <p style={{ margin: 0, fontSize: 13 }}>
            ✅ Admin login: <b>admin@gmail.com</b>
          </p>
          <p style={{ margin: 0, fontSize: 13 }}>
            ✅ Customer login: <b>any other email</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#f6f6f6",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    background: "#fff",
    borderRadius: 14,
    padding: 24,
    boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
  },
  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 800,
  },
  subtitle: {
    marginTop: 6,
    marginBottom: 20,
    color: "#666",
    fontSize: 14,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: 700,
  },
  input: {
    padding: 12,
    borderRadius: 10,
    border: "1px solid #ddd",
    fontSize: 14,
    outline: "none",
  },
  btn: {
    padding: 12,
    borderRadius: 10,
    border: "none",
    background: "#111",
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    marginTop: 6,
  },
  footer: {
    marginTop: 16,
    textAlign: "center",
    fontSize: 14,
    color: "#444",
  },
  link: {
    color: "#111",
    fontWeight: 800,
    textDecoration: "none",
  },
  mockBox: {
    marginTop: 16,
    padding: 12,
    borderRadius: 10,
    background: "#f3f3f3",
    border: "1px solid #e7e7e7",
  },
};
