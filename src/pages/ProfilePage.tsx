import HeaderMain from "@/components/Header/HeaderMain";
import Wrapper from "@/components/Wrapper";
import { authStore } from "@/store/authStore";
import { getMonthYearFromTimestamp } from "@/utils/utils";
import { Navigate } from "react-router";

export default function ProfilePage() {
  const user = authStore((state) => state.user);

  console.log("user");
  console.log(user);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <HeaderMain />
      <Wrapper>
        <div className="flex gap-4 items-center">
          <div>
            <figure className="w-[100px] h-[100px] bg-gray-200 rounded-full"></figure>
          </div>
          <div>
            <h2 className="text-4xl">{user?.displayName}</h2>
            <h3 className="text-text-secondary">
              Nike Member Since {getMonthYearFromTimestamp(user?.createdAt)}
            </h3>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
