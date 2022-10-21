import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes } from "react-router-dom";
import DashBoardPage from "../pages/Dashboard";
import LoginPage from "../pages/Login";
import RegisterPage from "../pages/Register";

const RoutesMain = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default RoutesMain;
