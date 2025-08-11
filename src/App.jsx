import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import FarmerDashboard from "./components/farmer/f_farmerDash.jsx";
import MerchantDash from "./components/merchant/m_merchantDash.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";

function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
                <Route path="/merchant-dashboard" element={<MerchantDash />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
    );
}

export default App;
