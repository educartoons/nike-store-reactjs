import { useNavigate } from "react-router";
import { ConverseIcon, JumpmanIcon } from "@/assets/icons";
import Wrapper from "../Wrapper";
import PreHeaderLink from "./PreHeaderLink";
import { useState } from "react";
import { HelpMenu } from "./PreMenus";
import { authStore } from "@/store/authStore";

export default function PreHeader() {
  const navigate = useNavigate();
  // const { user, signOut } = useAuthContext();
  const [displayHelpMenu, setDisplayHelpMenu] = useState(false);
  const user = authStore((state) => state.user);
  const signOutUser = authStore((state) => state.signOutUser);

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
                onMouseEnter={() => setDisplayHelpMenu(true)}
                onMouseLeave={() => setDisplayHelpMenu(false)}
                lastItem={false}
                handleClick={() => navigate("/")}
                displayMenu={displayHelpMenu}
                ContentMenu={<HelpMenu />}
              />
              {user ? (
                <>
                  <PreHeaderLink
                    name={user.email!}
                    lastItem={false}
                    handleClick={() => navigate("")}
                  />
                  <PreHeaderLink
                    name="Sign Out"
                    lastItem={true}
                    handleClick={signOutUser}
                  />
                </>
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
