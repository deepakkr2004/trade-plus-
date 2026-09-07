// import React from 'react';

// function Team() {
//     return ( 
//         <h1>Team</h1>
//      );
// }

// export default Team;

import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/DeepakKumar.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Deepak Kumar</h4>
          <h6>B.Tech, CSE Student</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Hi, I'm Deepak Kumar, a B.Tech Computer Science student at LNCTE, Bhopal. I enjoy building full-stack web applications using the MERN stack and solving Data Structures and Algorithms problems in Java.
          </p>
          <p>
            I am passionate about learning new technologies and creating user-friendly, scalable applications. I continuously improve my skills through projects and coding practice.
          </p>
          <p>In my free time, I enjoy coding, exploring new technologies, and preparing for software engineering roles.</p>
          <p>
            Connect on <a href="https://www.linkedin.com/in/deepak-kumar-380312342">LinkedIn</a> / <a href="https://leetcode.com/u/Deepakkr2004/">LeetCode</a> /{" "}
            <a href="https://github.com/deepakkr2004">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;