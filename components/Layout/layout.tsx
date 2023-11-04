import React, { Children, Fragment, ReactNode } from "react";
import MainNavigation from "./MainNavigation";

type ChildrenProps = {
  children: ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
