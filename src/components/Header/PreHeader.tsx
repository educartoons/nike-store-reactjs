import { ConverseIcon, JumpmanIcon } from "@/assets/icons";
import Wrapper from "../Wrapper";

const ITEMS = ["Find a Store", "Help", "Join Us", "Sign In"];

export default function PreHeader() {
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
                <li>
                  <a className="text-text-primary text-xs relative" href="">
                    {item}
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
