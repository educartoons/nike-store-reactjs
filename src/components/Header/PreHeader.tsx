import { useNavigate } from "react-router";
import { ConverseIcon, JumpmanIcon } from "@/assets/icons";
import Wrapper from "../Wrapper";
import PreHeaderLink from "./PreHeaderLink";
import { HelpMenu, ProfileMenu } from "./PreMenus";
import { authStore } from "@/store/authStore";

export default function PreHeader() {
  const navigate = useNavigate();
  const user = authStore((state) => state.user);

  return (
    <div className="bg-[#f5f5f5]">
      <Wrapper>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button>
              <JumpmanIcon />
            </button>
            <button>
              <ConverseIcon />
            </button>
          </div>
          <div>
            <ul className="flex gap-6">
              <PreHeaderLink
                name="Find Store"
                lastItem={false}
                handleClick={() => navigate("/")}
              />
              <PreHeaderLink
                name="Help"
                lastItem={false}
                handleClick={() => navigate("/")}
                ContentMenu={<HelpMenu />}
              />
              {user ? (
                <PreHeaderLink
                  name={`Hi, ${user.displayName!}`}
                  lastItem={true}
                  handleClick={() => navigate("")}
                  ContentMenu={<ProfileMenu />}
                />
              ) : (
                <>
                  <PreHeaderLink
                    name="Join Us"
                    lastItem={false}
                    handleClick={() => navigate("/lookup")}
                  />
                  <PreHeaderLink
                    name="Sign In"
                    lastItem={true}
                    handleClick={() => navigate("/lookup")}
                  />
                </>
              )}
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
