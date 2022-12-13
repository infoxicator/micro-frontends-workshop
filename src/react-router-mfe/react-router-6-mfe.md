# React Router 6 Micro-Frontends

## Introduction to React Router 6.4

[React Router 6.4](https://reactrouter.com/en/main) is a new version of React Router that brings a lot of features of Remix and makes them available to Single Page Applications.

### Nested Routing

[Nested Routing](https://reactrouter.com/en/main/start/overview#nested-routes) allows you split your application into smaller pieces that are linked to a URL segment. These segments are highly composable, reusable and can be nested to produce really complex user interfaces.

The best example of Nested Routing layout is present on the Remix website: [https://remix.run/](https://remix.run/)

Due to the flexibility and composability of Nested Routing, it is a great fit for Micro-Frontends, where you can split your application into smaller pieces that can be developed and deployed independently.

### Fetch Before Render

One of the main features of React Router 6.4 is the [Fetch Before Render](https://reactrouter.com/en/main/start/overview#data-loading) feature through the use of [Loaders](https://reactrouter.com/en/main/route/loader). This feature allows you to fetch data before rendering a route, fetch in parallel and improve performance and user experience by removing loading states (spinners and skeletons) from your application and removing Cumulative Layout Shift (CLS).

### Await and Defer

Another major feature from React Router 6.4 is the [Deferred Data](https://reactrouter.com/en/main/guides/deferred) feature available through [Await](https://reactrouter.com/en/main/components/await) and [Defer](https://reactrouter.com/en/main/utils/defer). This feature allows you to “await” for critical data and “defer” optional data when calling your loaders.


## Exercise 💪

### Code Splitting and Module Federation

In this exercise, we will use React Router 6.4 to create a Micro-Frontend application that uses Module Federation to load each route from a remote application and renders it in the host.

You can build on top of the previous excercise or start from the `react-router-6-mfe` folder.

Don't forget to run `npm i` to install the dependencies.

1. Render a Router as the entry point of the application:

 Go to `src/bootstrap.js` in the host application and render a [Provider](https://reactrouter.com/en/main/routers/router-provider) passing the `router` (`src/router.js`) as a prop. 

2. Import the remote modules as routes:

- Open `src/routes/products.js` in the host application and import the `Products` component from the remote application using `React.lazy` and wrap it in a `Suspense` boundary.

- Open `src/routes/cart.js` in the host application and import the `Cart` component from the remote application using `React.lazy` and wrap it in a `Suspense` boundary.

3. Enable Nested Routing in the host route:

- Go to `src/routes/host.js` and add an [Outlet](https://reactrouter.com/en/main/components/outlet) component to render the nested routes.

4. Add the routes to the router:

- Go to `src/router.js` and add the routes to the children array of the `Host` route.


## Extra Credit 🏅

1. Add a loading message to the global router in `bootstrap.js`

2. Add a "Navigation In Progress" message to the `Host` route.

3. Add error handling to all the routes and display a custom error message if an error ocurs.

3. React Router 6 is meant to remove spinners and reduce Cumulative Layout Shift (CLS), however, after our chnages, we are still seeing a spinner. Why is that? How can we fix it?

Resources:

- [React Router 6.4](https://reactrouter.com/en/main)
- [React Router Code-Splitting](https://www.infoxicator.com/react-router-6-4-code-splitting)
- [React Router Defer Example](https://www.infoxicator.com/react-router-6-deferred-fetch)

## Notes 📝

Take some notes here or write some questions.