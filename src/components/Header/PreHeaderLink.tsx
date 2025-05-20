interface PreHeaderLinkProps {
  name: string;
  lastItem: boolean;
  handleClick: () => void;
}

export default function PreHeaderLink({
  name,
  lastItem,
  handleClick,
}: PreHeaderLinkProps) {
  return (
    <li>
      <a
        onClick={handleClick}
        className="text-text-primary text-xs relative"
        href=""
      >
        {name}
        {!lastItem ? (
          <span className="absolute -right-3 top-0 w-[1px] h-[14px] bg-black"></span>
        ) : null}
      </a>
    </li>
  );
}
