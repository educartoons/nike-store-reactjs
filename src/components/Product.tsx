import { useState } from "react";
import type { IProduct } from "../db/db";

interface ProductProps {
  data: IProduct;
}

export default function Product({ data }: ProductProps) {
  const [displayInfo, setDisplayInfo] = useState(true);

  const handleShowInfo = () => {
    setDisplayInfo(true);
  };

  const handleHideInfo = () => {
    setDisplayInfo(false);
  };

  return (
    <div
      className="cursor-pointer"
      onMouseEnter={handleHideInfo}
      onMouseLeave={handleShowInfo}
    >
      <figure className="">
        <img className="w-full" src={data.img} alt={data.name} />
      </figure>
      <p className="my-2 text-lg font-semibold text-text-badge">{data.type}</p>
      {displayInfo && (
        <div>
          <p className="text-lg text-text-primary">{data.name}</p>
          <p className="text-lg text-text-secondary">{data.category}</p>
          <p className="text-lg text-text-secondary">{data.colors}</p>
        </div>
      )}
      <p className="text-lg mt-2 font-semibold text-text-primary">
        ${data.price}
      </p>
    </div>
  );
}
