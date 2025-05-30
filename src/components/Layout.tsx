import HeaderMain from "@/components/Header/HeaderMain";
import Wrapper from "@/components/Wrapper";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeaderMain />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
