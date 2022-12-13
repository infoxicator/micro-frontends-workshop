# Managing State and Communication in Micro-Frontends

## Avoiding Shared State

How do you share state on a Micro-Frontend architecture? 

**The answer is you don't share state**

Distributed Applications have to be as decoupled as possible so you can obtain the benefits or team autonomy and independent deployments.

How do you share data between them?

- Each Micro-Frontends should load the data it needs to render itself.

How do communicate between them?

There are a couple of ways to do this:

## Using Events

- You can use events to communicate between Micro-Frontends, this can be as simple as using the `CustomEvent` API. The Key is to ensure that the Micro-Frontends are decoupled and don't have a dependency on each other.

## Exposing an Interface

A Micro-Frontend can expose an interface that other Micro-Frontends can use to communicate with it. This interface could be in the form of a JavaScript object or a function that can only be updated in one direction and there are clear boundaries to do so. 

```js
// Micro-Frontend A exposes a `mount` function that returns a callback that can be executed by Micro-Frontend B
const mount = (el, { ...options }) => {
    
ReactDOM.render(<App />, el);
  return {
    mountCallback() {
      console.log('do something that updates the state of Micro-Frontend A');
    },
}
```

## Deduplicating API Calls and Caching

React Router 6.4 and the loaders and actions mechanism helps you keep your data and your UI in sync, removing the need for most of the server state management libraries, however, there are still some limitations to this approach.

For example, if each Micro-Frontend (route segment) requests its own data, there is a chance that the same data is requested multiple times. This can be solved by using a library like React Query to cache the data and avoid making unnecessary requests.

## Excercise 💪

This excercise will make API calls to a fake server on `http://localhost:9000`, go to the `server` and run `npm run start`

1. Configure React Query:

- Open `src/bootstrap.js` in the `host`and import the `queryClient` from `./query-client` and use it to wrap the `QueryClientProvider`.

2. Deduplicate API requests:

- Pass the `queryClient` to the `loaders` to deduplicate the API calls and use the Cache to avoid making unnecessary requests.

3. Invalidate the Cache:

- Invalidate the Query inside the Actions to update the UI when the data changes.

Resources: 📚

- [React Query](https://react-query.tanstack.com/)
- [React Query Meets React Router](https://tkdodo.eu/blog/react-query-meets-react-router)
- [React Router Data Library Integration](https://reactrouter.com/en/main/guides/data-libs)