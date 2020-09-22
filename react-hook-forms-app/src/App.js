import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import CreateNewCustomer from "./pages/CreateNewCustomer/CreateNewCustomer"

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-customer">New Customer</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/create-customer">
            <CreateNewCustomer />
          </Route>
          <Route path="/">
            <></>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App