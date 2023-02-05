import { Menu } from "react-admin";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import PersonIcon from "@mui/icons-material/Person";
import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.Item to="/car" primaryText="Cars" leftIcon={<TimeToLeaveIcon />} />
    <Menu.Item to="/driver" primaryText="Drivers" leftIcon={<PersonIcon />} />
    <Menu.Item to="/register" primaryText="Register" leftIcon={<LabelIcon />}/>
  </Menu>
);
