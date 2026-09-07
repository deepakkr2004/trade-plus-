// import React from 'react';

// function Signup() {
//     return ( 
//         <h1>Signup</h1>
//      );
// }

// export default Signup;

import React, { useState } from "react";
//new code
import axios from "axios";
//
function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(user); // Later we'll send this to the backend
//   };

const handleSubmit = async (e) => {
  e.preventDefault();
//   console.log("signup botton clicked");

  try {
    const response = await axios.post(
      "http://localhost:3002/signup",
      user
    );

    alert(response.data.message);
  } catch (error) {
    alert("Signup failed");
    console.log(error);
  }
};

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center mb-4">Create your account</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={user.email}
            onChange={handleChange}
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
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;