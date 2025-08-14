import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children, endPoint, message}) => {
    const session_data = localStorage.getItem("session.data");

    if (session_data == null) {
        return <Navigate to={endPoint + "?" + message} replace />;
    }
    return children;
};
export default ProtectedRoute;