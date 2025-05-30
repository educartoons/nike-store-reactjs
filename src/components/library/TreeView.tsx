import type { DirectoryItem } from "@/data/data";
import { ChevronDown, ChevronUp, Folder, File } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface TreeView {
  node: DirectoryItem;
  tab?: number;
}

export default function TreeView({ node, tab = 16 }: TreeView) {
  const [isOpened, setIsOpened] = useState(true);
  const handleToggle = () => {
    setIsOpened(!isOpened);
  };
  if (node.children) {
    return (
      <div>
        <h2 className="flex gap-1 items-center">
          {isOpened ? (
            <button onClick={handleToggle} className="cursor-pointer">
              <ChevronDown size={12} />
            </button>
          ) : (
            <button onClick={handleToggle} className="cursor-pointer">
              <ChevronUp size={12} />
            </button>
          )}
          <div className="flex gap-1 items-center">
            <Folder size={12} />
            <span className="text-xs">{node.name}</span>
          </div>
        </h2>
        <motion.div
          className="overflow-hidden"
          style={{
            marginLeft: `${tab}px`,
          }}
          animate={{
            height: isOpened ? "auto" : "0px",
          }}
        >
          {node.children.map((childNode, index) => (
            <TreeView key={index} node={childNode} />
          ))}
        </motion.div>
      </div>
    );
  }
  return (
    <div>
      <h2 className="flex items-center gap-2">
        <File size={12} />
        <span className="text-xs">{node.name}</span>
      </h2>
    </div>
  );
}
