import * as React from "react";
import { Layout } from "react-admin";

import { MyAppBar } from "./MyAppBar";
import { MyMenu } from "./MyMenu";
import { MySidebar } from "./MySidebar";

export const MyLayout = (props) => {
  // console.log({ props });
  return (
    <Layout
      {...props}
      appBar={MyAppBar}
      menu={MyMenu}
      sidebar={MySidebar}
    />
  );
};
