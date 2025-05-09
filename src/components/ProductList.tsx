import { useState } from "react";
import Product from "./Product";
import { PRODUCTS } from "../db/db";

export default function ProductList() {
  const [products] = useState(PRODUCTS);
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
}
