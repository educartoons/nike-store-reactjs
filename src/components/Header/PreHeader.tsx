import { useNavigate } from "react-router";
import { ConverseIcon, JumpmanIcon } from "@/assets/icons";
import Wrapper from "../Wrapper";
import PreHeaderLink from "./PreHeaderLink";
import { useAuthContext } from "@/context/auth-context";

export default function PreHeader() {
  const navigate = useNavigate();
  const { user, signOut } = useAuthContext();

  return (
    <div className="bg-[#f5f5f5] py-1">
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
              />
              {user ? (
                <>
                  <PreHeaderLink
                    name="Eduar Apaza"
                    lastItem={false}
                    handleClick={() => navigate("")}
                  />
                  <PreHeaderLink
                    name="Sign Out"
                    lastItem={true}
                    handleClick={signOut}
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
