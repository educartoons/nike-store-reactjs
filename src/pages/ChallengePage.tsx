import Challenge from "@/components/Challenge";
import { authStore } from "@/store/authStore";
import { Navigate } from "react-router";

export default function ChallengePage() {
  const userEmail = authStore((state) => state.email);

  if (userEmail === undefined) {
    return <Navigate to="/join" />;
  }

  return (
    <div>
      <Challenge />
    </div>
  );
}
