import Challenge from "@/components/Challenge";
import { useUserContext } from "@/context/user-context";
import { Navigate } from "react-router";

export default function ChallengePage() {
  const { user } = useUserContext();

  console.log(user);

  if (user?.email === undefined) {
    return <Navigate to="/join" />;
  }

  return (
    <div>
      <Challenge />
    </div>
  );
}
