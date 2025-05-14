import HeaderMain from "@/components/Header/HeaderMain";
import ProductList from "@/components/ProductList";
import Wrapper from "@/components/Wrapper";

export default function StorePage() {
  return (
    <>
      <HeaderMain />
      <Wrapper>
        <ProductList />
      </Wrapper>
    </>
  );
}
