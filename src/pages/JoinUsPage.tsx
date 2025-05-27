import JoinUs from "@/components/JoinUs";
import { authStore } from "@/store/authStore";
import { Navigate } from "react-router";

export default function JoinUsPage() {
  const email = authStore((state) => state.email);

  if (email === null) {
    return <Navigate to="/lookup" />;
  }

  return (
    <div>
      <JoinUs />
    </div>
  );
}
