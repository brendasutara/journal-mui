import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

export const Navbar = ({ drawerWidth = 240 }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          sx={{
            mr: 2,
            display: { sm: "none" },
          }}
        >
          <MenuOutlined />
        </IconButton>

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            width: "100%",
          }}
        >
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            JournalApp
          </Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
