import Wrapper from "@/components/Wrapper";
import HeaderMenu from "@/components/Header/HeaderMenu";
import HeaderLogotype from "@/components/Header/HeaderLogotype";
import HeaderRightMenu from "@/components/Header/HeaderRightMenu";

export default function Header() {
  return (
    <div className="bg-white">
      <Wrapper>
        <div className="flex items-center justify-between py-4">
          <div className="w-[120px]">
            <HeaderLogotype />
          </div>
          <div>
            <HeaderMenu />
          </div>
          <div>
            <HeaderRightMenu />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
