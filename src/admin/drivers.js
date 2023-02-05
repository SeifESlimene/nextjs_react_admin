import { Datagrid, List, TextField } from "react-admin";
import { DriverFilterSidebar } from "./DriverFilterSidebar";

export const DriverList = () => (
  <List aside={<DriverFilterSidebar />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="driver_cin" />
      <TextField source="name" />
    </Datagrid>
  </List>
);
