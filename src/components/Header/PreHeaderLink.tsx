import {
  useState,
  type DetailedHTMLProps,
  type LiHTMLAttributes,
  type ReactNode,
} from "react";
import { motion } from "motion/react";

interface PreHeaderLinkProps {
  name: string;
  lastItem: boolean;
  handleClick: () => void;
  ContentMenu?: ReactNode;
}

export default function PreHeaderLink({
  name,
  lastItem,
  handleClick,
  ContentMenu,
  ...rest
}: PreHeaderLinkProps) {
  const [displayMenu, setDisplayMenu] = useState(false);

  const handleMouseEnter = () => {
    if (!ContentMenu) return;
    setDisplayMenu(true);
  };

  const handleMouseLeave = () => {
    if (!ContentMenu) return;
    setDisplayMenu(false);
  };

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
      className="relative py-1"
    >
      <a
        onClick={handleClick}
        className="text-text-primary text-xs relative font-medium"
        href=""
      >
        {name}
        {!lastItem ? (
          <span className="absolute -right-3 top-0 w-[1px] h-[14px] bg-black"></span>
        ) : null}
      </a>
      {displayMenu && (
        <motion.div
          initial={{
            top: "20px",
            opacity: 0,
          }}
          animate={{
            top: "32px",
            opacity: 100,
          }}
          className="absolute -right-5 rounded-xl bg-white w-[200px] z-10 p-5"
        >
          {displayMenu && ContentMenu}
        </motion.div>
      )}
    </li>
  );
}
