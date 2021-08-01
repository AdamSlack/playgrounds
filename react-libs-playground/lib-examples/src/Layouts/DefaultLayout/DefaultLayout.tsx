import React from "react";
import { NavBar } from "../../Components/NavBar";

export type DefaultLayoutProps = {
  children: JSX.Element,
}

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      { children }
    </>
  )
}

export default DefaultLayout;