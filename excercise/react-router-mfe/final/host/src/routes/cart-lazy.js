import React from "react";
let Cart = React.lazy(() => import("cart/Cart"));

export default function LazyCart() {
  return (
    <React.Suspense fallback={<p>Loading component...</p>}>
      <Cart />
    </React.Suspense>
  );
}

export async function lazyCartLoader(...args) {
  let controller = new AbortController();
  import("cart/Cart").then(
    (componentModule) => {
      if (!controller.signal.aborted) {
        Cart = componentModule.default;
      }
    },
    () => {}
  );

  try {
    const { loader } = await import("../loaders/cart-loader.js");
    return await loader(...args);
  } finally {
    controller.abort();
  }
}
