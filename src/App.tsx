import Header from "@/components/Header/Header";
import ProductList from "@/components/ProductList";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <ProductList />
      </Wrapper>
    </>
  );
}
