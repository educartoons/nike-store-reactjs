import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

interface ProductItem {
  name: string;
  subtitle: string;
  price: number;
  images: string[];
}

const PRODUCT: ProductItem = {
  name: `Jordan 4 Retro "White Cement`,
  subtitle: `Little Kids' Shoes`,
  price: 100,
  images: [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3a787d91-c43d-48ca-920e-e450ac617c1e/JORDAN+4+RETRO+OG+%28PS%29.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/b777d12c-5e9c-46cb-978e-83ddd9c992ac/JORDAN+4+RETRO+OG+%28PS%29.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/01697e8b-74a1-486d-b657-e6163e79a1c2/JORDAN+4+RETRO+OG+%28PS%29.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/efb9a788-43e3-4b9c-b19b-bde7c1df3506/JORDAN+4+RETRO+OG+%28PS%29.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/eea24c32-60cd-4a75-a8f0-bf798f06fd4e/JORDAN+4+RETRO+OG+%28PS%29.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/ef50908a-4a57-4ee7-bb5a-2f3d9f30964f/JORDAN+4+RETRO+OG+%28PS%29.png",
    "",
  ],
};

export default function ProductDetails() {
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-7">
        <ProductGallery images={PRODUCT.images} />
      </div>
      <div className="col-span-5">
        <ProductInfo />
      </div>
    </div>
  );
}
