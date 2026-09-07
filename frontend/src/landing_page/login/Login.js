// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setUser({
      email: "",
      password: "",
    });
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(user);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      alert("No internet connection. Please check your network.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3002/login",
        user
      );
      console.log(response.data);

      localStorage.setItem("fullName", response.data.fullName);

      console.log("Saved:", localStorage.getItem("fullName"));

      setTimeout(() => {
        window.location.href = "http://localhost:3001";
      }, 300);

      // alert(response.data.fullName);

      // localStorage.clear();

      // localStorage.setItem("fullName", response.data.fullName);

      // alert(localStorage.getItem("fullName"));

      // window.location.href = "http://localhost:3001";
    } catch (error) {
      if (!error.response) {
        alert("Unable to connect. Please check your internet connection.");
      } else if (error.response.status === 401) {
        alert("Invalid email or password");
      } else {
        alert("Something went wrong. Please try again.");
      }

      console.log(error);
    }
  }

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Login</h2>

      <form onSubmit={handleSubmit} autoCpmplete="off">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={user.password}
            onChange={handleChange}
            autoComplete="new-password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;