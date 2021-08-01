import { Switch, Route } from "react-router-dom";

import { routes } from './Routes';

function App() {
  return (
    <>
      <Switch>
        { 
          routes.map(({ path, component: Component }, idx) => {
            return (
              <Route path={path} key={idx}>
                <Component />
              </Route>
            )
          })
        }
      </Switch>
    </>
  );
}

export default App;
