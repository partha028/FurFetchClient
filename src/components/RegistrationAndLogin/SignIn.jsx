import React, { useState } from "react";
import './auth.css';

const SignIn = ({ setShowSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    setError("");
    alert("Signed in successfully!");
    window.location.href = "/home";
  };

  return (
    <div>
      <h2>Sign In</h2>
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
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleSignIn}>Sign In</button>
      <p>
        Don't have an account?{" "}
        <span onClick={() => setShowSignIn(false)} style={{ cursor: "pointer", color: "blue" }}>
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default SignIn;
