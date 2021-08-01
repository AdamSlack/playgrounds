import React from "react"
import { Home } from "./Pages/Home"

export type ConfigRoute = {
  path: string,
  component: React.FunctionComponent,
  routes?: Array<ConfigRoute>,
}

export const routes: Array<ConfigRoute> = [
  {
    path: '/',
    component: Home,
  }
]