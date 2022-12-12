import React from "react";
const Cart = React.lazy(() => import("cart/Cart"));

export default function CartPage() {
  return (
    <React.Suspense fallback="Loading Cart">
      <Cart />
    </React.Suspense>
  );
}
