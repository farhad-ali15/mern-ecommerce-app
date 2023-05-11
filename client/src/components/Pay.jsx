import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Success from "../pages/Success";
const ProductDisplay = () => {
  const c = useSelector((state) => state.cart);
  console.log(c);
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {c.products.map((product) => (
        <div>
          <img
            style={{ width: "30%", height: "15%" }}
            src={product.img}
            alt={product.title}
          />
          <div className="description">
            <h3>{product.desc}</h3>
            <h5>${c.totalAmount}</h5>
          </div>
        </div>
      ))}

      <form action="http://localhost:5000/api/checkout/payment" method="POST">
        <button type="submit">PAY NOW</button>
      </form>
    </div>
  );
};

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Pay() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Success /> : <ProductDisplay />;
}
