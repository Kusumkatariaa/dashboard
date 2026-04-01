import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      {showSidebar && <Sidebar />}

      {/* Right side */}
      <div className="flex-1 flex flex-col">

        <Navbar toggleSidebar={() => setShowSidebar(!showSidebar)} />

        <div className="flex-1 p-6 bg-gray-100">
          <AppRoutes />
        </div>

      </div>

    </div>
  );
};

export default App;