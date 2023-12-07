import { AppBar, Toolbar, Typography, Button, Stack } from "@mui/material";
import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <AppBar position="static" sx={{ marginBottom: 2, boxShadow: "none" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            GMO
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/second-page">
            Second Page
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              localStorage.removeItem("userFormData");
              navigate("/");
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Stack>
  );
};

export default Navbar;
