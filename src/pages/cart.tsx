import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const cartItems = [
  {
    productId: "dsfhajsdhl",
    photo:
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1685966374/Croma%20Assets/Computers%20Peripherals/Laptop/Images/256711_umnwok.png?tr=w-360",
    name: "Apple MacBook Air 2024",
    price: 81990,
    quantity: 4,
    stock: 10,
  },
];

const subtotal = 4000;
const tax = Math.round(subtotal * 0.18);
const discount = 400;
const shippingCharges = 200;
const total = subtotal + tax + shippingCharges;

export default function Cart() {
  const [couponCode, setCouponCode] = useState<string>("");
  const [isValidCouponCode, setIsValidCouponCode] = useState<boolean>(false);

  useEffect(() => {
    const timeOutID = setTimeout(() => {
      Math.random() > 0.5
        ? setIsValidCouponCode(true)
        : setIsValidCouponCode(false);
    }, 1000);

    return () => {
      clearTimeout(timeOutID);
      setIsValidCouponCode(false);
    };
  }, [couponCode]);

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i, idx) => <CartItem key={idx} cartItem={i} />)
        ) : (
          <h1>No Items Added</h1>
        )}
      </main>

      <aside>
        <p>Subtotal: ₹{subtotal}</p>
        <p>Shipping Charges: ₹{shippingCharges}</p>
        <p>Tax: ₹{tax}</p>
        <p>
          Discunt: <em className="red">- ₹{discount}</em>
        </p>
        <p>
          <b>Total: ₹{total}</b>
        </p>
        <input
          type="text"
          placeholder="Coupon Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
        />

        {couponCode &&
          (isValidCouponCode ? (
            <span className="green">
              ₹{discount} off using the <code>{couponCode}</code>
            </span>
          ) : (
            <span className="red">
              Invalid Coupon <VscError />
            </span>
          ))}

        {cartItems.length > 0 && <Link to="/shipping">Checkout</Link>}
      </aside>
    </div>
  );
}
