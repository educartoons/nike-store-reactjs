import HeaderMain from "@/components/Header/HeaderMain";
import Rating from "@/components/library/Rating";
import ProductList from "@/components/ProductList";
import Wrapper from "@/components/Wrapper";

export default function StorePage() {
  return (
    <>
      <HeaderMain />
      <Wrapper>
        <Rating count={10} />
        <ProductList />
      </Wrapper>
    </>
  );
}
