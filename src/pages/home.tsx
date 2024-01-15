import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const addToCartHandler = () => {
    //
  };
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findMore">
          More
        </Link>
      </h1>

      <main>
        <ProductCard
          productId="sdjfhaldksjfha"
          name="Apple MacBook Air 2024"
          price={81990}
          stock={435}
          handler={addToCartHandler}
          photo="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-360"
        />
      </main>
    </div>
  );
}
