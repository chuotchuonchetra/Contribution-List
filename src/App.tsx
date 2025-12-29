import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import { Dashboard } from "./features/Dashboard";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GuestList from "./features/GuestList";
import DebtGuest from "./features/DebtGuest";
import PaybackGuest from "./features/PaybackGuest";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 khmer-regular text-gray-900 dark:text-gray-100 transition-colors font-khmer">
          <Navbar />

          <div className="flex">
            <Sidebar />
            <div className="flex-1">
              {/* The routes control what shows up here */}
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/guests" element={<GuestList />} />
                <Route path="/debtguests" element={<DebtGuest />} />
                <Route path="/paybackguests" element={<PaybackGuest />} />
                <Route
                  path="/settings"
                  element={<div className="p-6">Settings Page</div>}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
