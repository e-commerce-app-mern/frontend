import { FaPlus } from "react-icons/fa";
import { server } from "../redux/reducer/store";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: () => void;
};

export default function ProductCard({
  // productId,
  photo,
  name,
  price,
  // stock,
  handler,
}: ProductsProps) {
  return (
    <div className="product-card">
      <img src={`${server}/${photo}`} alt={name} />
      <p>{name}</p>
      <span>₹{price}</span>

      {/* Overlay button */}
      <div>
        <button onClick={() => handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
}
