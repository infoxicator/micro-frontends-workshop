/* import the products component from the federated module using React.lazy
 and React.Suspense
*/
const Cart = React.lazy(() => import("insert remote module name here"));

export default function LazyCart() {
  return (
    <React.Suspense fallback={<p>Loading component...</p>}>
      <Products />
    </React.Suspense>
  );
}
