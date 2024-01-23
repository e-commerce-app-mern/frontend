import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

type ProtectedRouteProps = {
  children?: ReactElement;
  isAuthenticated: boolean;
  adminOnly?: boolean;
  admin?: boolean;
  redirect?: string;
};

export default function ProtectedRoute({
  isAuthenticated,
  children,
  adminOnly,
  admin,
  redirect = "/",
}: ProtectedRouteProps) {
  if (!isAuthenticated || (adminOnly && !admin)) {
    return <Navigate to={redirect} />;
  }

  return children ? children : <Outlet />;
}
