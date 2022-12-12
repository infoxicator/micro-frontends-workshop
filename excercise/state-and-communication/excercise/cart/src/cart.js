import React from "react";
import { useLoaderData, useFetcher } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { cartQuery } from "./loader";


const Cart = () => {
  const cart = useQuery(["cart"], cartQuery).data;
  const fetcher = useFetcher();
  return (
    <>
      <ul style={{ color: "blue" }}>
        <li>
          {cart.name} - {cart.price} - quantity {cart.quantity}
        </li>
      </ul>
      <fetcher.Form method="post">
        <input type="hidden" name="name" value={cart.name} />
        <input type="hidden" name="price" value={cart.price} />
        <input
          id="quantity"
          aria-label="Update product quantity"
          type="number"
          name="quantity"
          defaultValue={cart.quantity}
        />
        <button type="submit">Update</button>
      </fetcher.Form>
    </>
  );
};

export default Cart;
