import React from "react";
let Cart = React.lazy(() => import("cart/Cart"));

export default function LazyCart() {
  return (
    <React.Suspense fallback={<p>Loading component...</p>}>
      <Cart />
    </React.Suspense>
  );
}

export function lazyCartLoader(queryClient){
  return async (...args) => {
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
      const { loader } = await import("cart/CartLoader");
      return await loader(queryClient)(...args);
    } finally {
      controller.abort();
    }
  }
}
