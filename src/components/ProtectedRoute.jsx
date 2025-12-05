import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/useAuth";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" replace />;

  if (allowedRoles && !allowedRoles.includes(user?.role)) {
    return <Navigate to="/404" replace />;
  }

  return children;
};

export default ProtectedRoute;
