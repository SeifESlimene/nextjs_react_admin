import * as React from "react";
import {
  Admin,
  Resource,
  EditGuesser,
  ShowGuesser,
  CustomRoutes,
  Login
} from "react-admin";
import postgrestRestProvider from "@promitheus/ra-data-postgrest";
import { MyLayout } from "../MyLayout";
import Dashboard from "./Dashboard";
import { i18nProvider } from "./i18nProvider";
import authProvider from "./authProvider";

import { Route } from "react-router-dom";

import { CarList, PostAnalytics } from "./cars";
import { DriverList } from "./drivers";

import Register from './register';

// import { authRoutes, LoginPage } from 'ra-supabase';

const dataProvider = postgrestRestProvider("/api/admin");
// import { dataProvider } from './dataProvider';

// import customRoutes from './routes'

const MyLoginPage = () => (
  <Login
      // A random image that changes everyday
      backgroundImage="https://source.unsplash.com/random/1600x900/daily"
  />
);

const App = () => (
  <Admin
    loginPage={MyLoginPage}
    layout={MyLayout}
    dashboard={Dashboard}
    i18nProvider={i18nProvider}
    authProvider={authProvider}
    dataProvider={dataProvider}
    // customRoutes={customRoutes}
    // loginPage={LoginPage}
  >
    <Resource name="car" list={CarList} edit={EditGuesser} show={ShowGuesser}>
      <Route path="analytics" element={<PostAnalytics />} />
    </Resource>
    <Resource
      name="driver"
      list={DriverList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <CustomRoutes noLayout>
      <Route path="/register" element={<Register />} />
    </CustomRoutes>
  </Admin>
);

export default App;
