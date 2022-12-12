export const action = (queryClient) => async ({ request }) => {
    const formData = await request.formData()
    const updates = Object.fromEntries(formData)
    await fetch(`http://localhost:9000/cart`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
    })
    await queryClient.invalidateQueries(["cart"]);
    return null;
}