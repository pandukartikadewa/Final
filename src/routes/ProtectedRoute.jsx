import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn, isAdmin } from "../utils/auth";

export default function ProtectedRoute({ requireAdmin = false }) {
  // belum login
  if (!isLoggedIn()) {
    return <Navigate to="/admin" replace />;
  }

  // login tapi bukan admin
  if (requireAdmin && !isAdmin()) {
    return <Navigate to="/" replace />;
  }

  // lolos semua
  return <Outlet />;
}
