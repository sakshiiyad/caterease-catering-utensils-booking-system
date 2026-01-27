import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import { setAuth } from "../utils/auth";
import { useAuth } from "../context/AuthContext";


const Signup = () => {
  const {login}=useAuth()
  const navigate = useNavigate();
  const API_URL=`http://localhost:5000/auth/signup`;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
   
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async(e) => {
    e.preventDefault();
    // const {name,email,password}=formData

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    const response=await fetch(API_URL,{
      method:"POST",
      headers:{"content-Type":"application/json"
      },
      body:JSON.stringify({
        name:formData.name,
        email:formData.email,
        password:formData.password
      })
    }
    
    )
    const data=await response.json();
    console.log("working")
    console.log(data)
    if(data.success){
    toast.success("signup successfully")
    const token=data.token;
    const role=data.user.role
    setAuth({token,role})
    login(role)
    navigate(role==="admin"?"/admin":"/my-bookings")
    console.log("token saved")
    }
    else{
      toast.error("Something went wrong")
    }
  


    
    

    
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Signup</h2>
        <p style={styles.subtitle}>Create your CaterEase account</p>

        <form onSubmit={handleSignup} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Enter your name"
              required
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter your email"
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

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              type="password"
              placeholder="******"
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.btn}>
            Create Account
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account?{" "}
          <Link to="/login" style={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

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
    maxWidth: 460,
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
};
