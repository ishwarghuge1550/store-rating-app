import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import StoreOwnerDashboard from "./pages/StoreOwnerDashboard";
import PrivateRoute from "./components/PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/admin"
        element={
          <PrivateRoute roles={["admin"]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/user"
        element={
          <PrivateRoute roles={["user"]}>
            <UserDashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/store-owner"
        element={
          <PrivateRoute roles={["store_owner"]}>
            <StoreOwnerDashboard />
          </PrivateRoute>
        }
      />

      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
