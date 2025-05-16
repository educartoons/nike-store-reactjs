import JoinUs from "@/components/JoinUs";
import { useUserContext } from "@/context/user-context";
import { Navigate } from "react-router";

export default function JoinUsPage() {
  const { user } = useUserContext();

  if (user?.email === undefined) {
    return <Navigate to="/lookup" />;
  }

  return (
    <div>
      <JoinUs />
    </div>
  );
}
