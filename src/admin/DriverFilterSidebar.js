import {
  FilterLiveSearch
} from "react-admin";
import { Box, Card, CardContent } from "@mui/material";
import { HasActiveFilter } from "./HasActiveFilter";

export const DriverFilterSidebar = () => (
  <Box
    sx={{
      display: {
        xs: "none",
        sm: "block",
      },
      order: -1, // display on the left rather than on the right of the list
      width: "15em",
      marginRight: "1em",
      marginTop: "-0.55em",
    }}
  >
    <Card sx={{ order: -1, mr: 2, mt: 9, width: 200 }}>
      <CardContent>
        <FilterLiveSearch source="license" />
        <HasActiveFilter />
      </CardContent>
    </Card>
  </Box>
);
