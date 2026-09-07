import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

// const Home = () => {
//   return (
//     <>
//       <TopBar />
//       <Dashboard />
//     </>
//   );
// };

// export default Home;
const Home = () => {
  return (
    <div className="dashboard-animation">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;
