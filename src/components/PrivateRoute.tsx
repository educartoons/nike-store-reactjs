import { authStore } from "@/store/authStore";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoute() {
  const user = authStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}
