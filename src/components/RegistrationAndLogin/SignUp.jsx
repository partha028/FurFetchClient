import React, { useState } from "react";
import './auth.css';

const SignUp = ({ setShowSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8 || !/[!@#$%^&*]/.test(password)) {
      setError("Password must be at least 8 characters long and include a special character.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((user) => user.email === email)) {
      setError("Email already exists.");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    setError("");
    setSuccess("Account created successfully! Please sign in.");
    window.location.href = "/signin";
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <button onClick={handleSignUp}>Sign Up</button>
      <p>
        Already have an account?{" "}
        <span onClick={() => setShowSignIn(true)} style={{ cursor: "pointer", color: "blue" }}>
          Sign In
        </span>
      </p>
    </div>
  );
};

export default SignUp;
