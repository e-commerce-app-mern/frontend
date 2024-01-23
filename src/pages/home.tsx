import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { SkeletonLoader } from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { useLatestProductsQuery } from "../redux/api/productAPI";
import { useSelector } from "react-redux";
import { UserReducerInitialState } from "../types/reducer.types";

export default function Home() {
  const { user } = useSelector(
    (state: { userReducer: UserReducerInitialState }) => state.userReducer
  );

  const { data, isLoading, isError } = useLatestProductsQuery(
    user?._id as string
  );

  const addToCartHandler = () => {
    //
  };

  if (isError) {
    toast.error("Cannot Fetch the Products");
  }
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
        {isLoading ? (
          <SkeletonLoader width="80vw" />
        ) : (
          data?.products.map((i) => (
            <ProductCard
              key={i._id}
              productId={i._id}
              name={i.name}
              price={i.price}
              stock={i.stock}
              handler={addToCartHandler}
              photo={i.photo}
            />
          ))
        )}
      </main>
    </div>
  );
}
