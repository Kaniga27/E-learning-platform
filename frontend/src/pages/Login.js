import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/");
    } catch (err) {
      setError("Invalid email or password!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "100px auto",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 0 16px #ccc",
        fontFamily: "Segoe UI, sans-serif",
        textAlign: "center",
      }}
    >
      <h2>Welcome Back 👋</h2>
      <p style={{ color: "#888" }}>Login to your account</p>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "15px",
        }}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          display: "block",
          width: "100%",
          padding: "10px",
          margin: "10px 0",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontSize: "15px",
        }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "12px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
      <p style={{ marginTop: "16px" }}>
        No account?{" "}
        <span
          onClick={() => navigate("/register")}
          style={{ color: "#4CAF50", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;
