export const cartQuery = () => ({
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await fetch("http://localhost:9000/cart");
      return response.json();
    },
    useErrorBoundary: true,
});

export const loader = (queryClient) => async () => {
  const query = cartQuery();
  return (
    queryClient.getQueryData(query) || (await queryClient.fetchQuery(query))
  );
};
