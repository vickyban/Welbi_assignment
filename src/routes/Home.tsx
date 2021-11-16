import { AppBar, Avatar, Button, Toolbar } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import logo from "../logo.svg";

export const Home = () => {
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Avatar alt="Logo" src={logo} />
          <Button component={Link} to="/programs">
            Programs
          </Button>

          <Button component={Link} to="/residents">
            Residents
          </Button>
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};
