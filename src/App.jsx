import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Login from "./components/login/Login.jsx";
import FarmerDashboard from "./components/farmer/f_farmerDash.jsx";
import MerchantDash from "./components/merchant/m_merchantDash.jsx";
import AdminDashboard from "./components/admin/AdminDashboard.jsx";
import Register from "./components/register/Register.jsx";
import FarmerRegistration from "./components/register/FarmerRegistration.jsx";
import MerchantRegistartion from "./components/register/MerchantRegistration.jsx";
import ProtectedRoutes from "./helpers/ProtectedRoutes.jsx";

function App() {
    return (
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/farmer-dashboard" element= {
          <ProtectedRoutes endPoint={"/login"} message = {"session-expired"}>
               <FarmerDashboard/>
          </ProtectedRoutes>
        }/>
                <Route path="/farmer-dashboard" element={<FarmerDashboard />} />
                <Route path="/merchant-dashboard" element={<MerchantDash />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/register" element={<Register />} />
                <Route path="/farmerreg" element={<FarmerRegistration />} />
                <Route path="/merchantreg" element={<MerchantRegistartion />} />
            </Routes>
    );
}

export default App;
