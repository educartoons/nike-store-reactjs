import { CartIcon, HeartIcon, SearchIcon } from "@/assets/icons";

export default function HeaderRightMenu() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <button className="bg-zinc-0 relative lg:absolute hover:bg-zinc-200 p-1 rounded-full cursor-pointer">
          <SearchIcon />
        </button>
        <input
          className="hidden outline-0 bg-zinc-100 py-1 pl-10 pr-2 rounded-full lg:block"
          type="text"
          placeholder="Search"
        />
      </div>
      <button className="bg-zinc-0 hover:bg-zinc-200 p-1 rounded-full cursor-pointer">
        <HeartIcon />
      </button>
      <button className="bg-zinc-0 hover:bg-zinc-200 p-1 rounded-full cursor-pointer">
        <CartIcon />
      </button>
    </div>
  );
}
