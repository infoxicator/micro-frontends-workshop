import React from "react";
const Products = React.lazy(() => import("products/Products"));

export default function ProductsPage() {
  return (
    <React.Suspense fallback="Loading Products">
      <Products />
    </React.Suspense>
  );
}