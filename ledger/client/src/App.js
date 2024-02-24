import React from "react";
import "./styles/App.css";
import AppRouter from "./components/AppRouter";
import TopNavbar from "./components/TopNavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex-1 flex flex-col h-screen ">
      <TopNavbar />

      <div className="flex h-screen">
        <div className="hidden sm:block w-1/8 bg-gray-800 px-1 pr-2">
          <SideBar />
        </div>

        {/* App Router - Main Content Area */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
          <AppRouter />
        </div>
      </div>

      {/* Footer */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
