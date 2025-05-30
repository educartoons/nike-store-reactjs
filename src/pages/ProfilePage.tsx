import Layout from "@/components/Layout";
import { authStore } from "@/store/authStore";
import { getMonthYearFromTimestamp } from "@/utils/utils";
import { Navigate } from "react-router";

export default function ProfilePage() {
  const user = authStore((state) => state.user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Layout>
      <div className="flex gap-4 items-center">
        <div>
          <figure className="w-[100px] h-[100px] bg-gray-200 rounded-full"></figure>
        </div>
        <div>
          <h2 className="text-4xl">{user?.displayName}</h2>
          <h3 className="text-text-secondary">
            Nike Member Since {getMonthYearFromTimestamp(user.createdAt)}
          </h3>
        </div>
      </div>
    </Layout>
  );
}
