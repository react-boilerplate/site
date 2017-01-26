# Routing via `react-router` and `react-router-redux`

`react-router` is the de-facto standard routing solution for react applications.
The thing is that with redux and a single state tree, the URL is part of that
state. `react-router-redux` takes care of synchronizing the location of our
application with the application state.

(See the [`react-router-redux` documentation](https://github.com/reactjs/react-router-redux)
for more information)

## Usage

To add a new route, use the generator with `$ npm run generate route`.

This is what a standard (generated) route looks like for a container:

```JS
{
  path: '/',
  name: 'home',
  getComponent(nextState, cb) {
    const importModules = Promise.all([
      System.import('containers/HomePage')
    ]);

    const renderRoute = loadModule(cb);

    importModules.then(([component]) => {

      renderRoute(component);
    });

    importModules.catch(errorLoading);
  },
}
```

To go to a new page use the `push` function by `react-router-redux`:

```JS
import { push } from 'react-router-redux';

dispatch(push('/some/page'));
```
