import React from "react";
let Products = React.lazy(() => import("products/Products"));

export default function LazyProducts() {
  return (
    <React.Suspense fallback={<p>Loading component...</p>}>
      <Products />
    </React.Suspense>
  );
}

export async function lazyProductsLoader(...args) {
  let controller = new AbortController();
  import("products/Products").then(
    (componentModule) => {
      if (!controller.signal.aborted) {
        Products = componentModule.default;
      }
    },
    () => {}
  );

  try {
    const { loader } = await import("products/ProductsLoader");
    return await loader(...args);
  } finally {
    controller.abort();
  }
}