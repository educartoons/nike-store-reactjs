import type { DetailedHTMLProps, LiHTMLAttributes, ReactNode } from "react";
import { motion } from "motion/react";

interface PreHeaderLinkProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  name: string;
  lastItem: boolean;
  handleClick: () => void;
  displayMenu?: boolean;
  ContentMenu?: ReactNode;
}

export default function PreHeaderLink({
  name,
  lastItem,
  handleClick,
  displayMenu,
  ContentMenu,
  ...rest
}: PreHeaderLinkProps) {
  return (
    <li {...rest} className="relative py-1">
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
          }}
          animate={{
            top: "32px",
          }}
          className="absolute -right-5 rounded-xl bg-white w-[200px] z-10 p-5"
        >
          {displayMenu && ContentMenu}
        </motion.div>
      )}
    </li>
  );
}
