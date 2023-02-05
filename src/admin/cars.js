import {
  BooleanField,
  Datagrid,
  List,
  NumberField,
  TextField,
  ImageField,
} from "react-admin";
import { DriverFilterSidebar } from "./DriverFilterSidebar";

export const CarList = () => (
  <List aside={<DriverFilterSidebar />}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <BooleanField source="active" />
      <NumberField source="mileage" />
      <NumberField source="driver" />
      <TextField source="license" />
      {/* <ImageField
        source="url"
        title="title"
        sx={{ "& .RaImageField-image": { width: 200, height: 100, objectFit: "contain" } }}
      /> */}
    </Datagrid>
  </List>
);

export const PostAnalytics = () => {
  return (
    <>
      <h1>Welcome To Post Analytics</h1>
    </>
  );
};
