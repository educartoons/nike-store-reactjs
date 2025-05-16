import { useNavigate } from "react-router";
import { ConverseIcon, JumpmanIcon } from "@/assets/icons";
import Wrapper from "../Wrapper";

const ITEMS = [
  {
    name: "Find Store",
    link: "/find-store",
  },
  {
    name: "Help",
    link: "/help",
  },
  {
    name: "Join Us",
    link: "/lookup",
  },
  {
    name: "Sign In",
    link: "/lookup",
  },
];

export default function PreHeader() {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };
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
              {ITEMS.map((item, index) => (
                <li key={index}>
                  <a
                    onClick={() => handleClick(item.link)}
                    className="text-text-primary text-xs relative"
                    href=""
                  >
                    {item.name}
                    {index !== ITEMS.length - 1 ? (
                      <span className="absolute -right-3 top-0 w-[1px] h-[14px] bg-black"></span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
