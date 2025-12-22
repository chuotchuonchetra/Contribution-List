import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import { Dashboard } from "./features/Dashboard";
import ContributionList from "./features/ContributionList";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 khmer-regular text-gray-900 dark:text-gray-100 transition-colors">
        <Navbar />

        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            {/* The routes control what shows up here */}
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/guests" element={<ContributionList />} />
              <Route
                path="/settings"
                element={<div className="p-6">Settings Page</div>}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
