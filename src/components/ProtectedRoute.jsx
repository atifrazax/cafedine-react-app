import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" replace />;

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to={user?.role === "admin" ? "/admin" : "/"} replace />;
  }

  return children;
};

export default ProtectedRoute;
