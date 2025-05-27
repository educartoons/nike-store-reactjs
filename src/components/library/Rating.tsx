import { useState, type KeyboardEvent } from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
interface StarProps {
  currentPosition: number;
  index: number;
  setCurrentPosition: (index: number) => void;
  setFlag: (value: boolean) => void;
  hoverPosition: number;
  setHoverPosition: (index: number) => void;
}

const Star = ({
  currentPosition,
  index,
  setCurrentPosition,
  setFlag,
  hoverPosition,
  setHoverPosition,
}: StarProps) => {
  const handleMouseEnter = () => {
    setHoverPosition(index);
  };
  const handleMouseLeave = () => {
    setCurrentPosition(currentPosition);
  };
  const handleClick = () => {
    setCurrentPosition(index);
    setHoverPosition(index);
    console.log(index);
    setFlag(true);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLSpanElement>) => {
    console.log(event.key);
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <span
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {index <= hoverPosition ? (
        <IconStarFilled className="text-yellow-500" />
      ) : (
        <IconStar className="text-yellow-500" />
      )}
    </span>
  );
};

interface RatingProps {
  count: number;
}

export default function Rating({ count }: RatingProps) {
  const [currentPosition, setCurrentPosition] = useState(-1);
  const [hoverPosition, setHoverPosition] = useState(-1);
  const [flag, setFlag] = useState(false);

  const handleLeave = () => {
    if (flag === true) {
      setHoverPosition(currentPosition);
    } else {
      setCurrentPosition(-1);
      setHoverPosition(-1);
    }
  };

  return (
    <div onMouseLeave={handleLeave} className="flex items-center gap-2">
      {[...Array(count)].map((_, index) => (
        <Star
          key={index}
          currentPosition={currentPosition}
          hoverPosition={hoverPosition}
          index={index}
          setHoverPosition={setHoverPosition}
          setCurrentPosition={setCurrentPosition}
          setFlag={setFlag}
        />
      ))}
    </div>
  );
}
