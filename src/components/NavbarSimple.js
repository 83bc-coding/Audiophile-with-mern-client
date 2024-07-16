import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import Badge from "@mui/material/Badge";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Store from "./store";
import { SelectPlanContext } from "../Hook/categoryState";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const pages = ["HOME", "HEADPHONES", "SPEAKERS", "EARPHONES"];

function ResponsiveAppBar() {
  const  amountProduct  = useSelector((state) => state.amountProduct);
  const  token  = useSelector((state) => state.token);

  const { plansOption, setPlansOption } = React.useContext(SelectPlanContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [store, setStore] = useState(false);
  const location = useLocation()
  if(location.pathname === '/login' || location.pathname === '/register'){
    return null;
  }
  function handleStore() {
    setStore((e)=>{
      return !e
    });
  }

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (p) => {
    setAnchorElNav(null);
   };

  // const handleDocumentClick = (event) => {
  //   if (event.target.closest('.my-element') === null) {
  //     setStore(false);
  //   }
  // };

  // React.useEffect(() => {

  //   document.addEventListener('click', handleDocumentClick);
  //   return () => {
  //     document.removeEventListener('click', handleDocumentClick);
  //   };
  // });

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#D87D4A",
        light: "",
      },
    },
  });



  return (
    <> 
    <AppBar  sx={{ backgroundColor: "rgb(25, 25, 25)" }}>
      <Container
        maxWidth="xl"
        sx={{ width: "95%", margin: "auto", opacity: "0.9" }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Audiophile
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
           
             >    
                 {/* //         <Link to={ page=== 'HOME' ?'/home':`/category/${page}`}>  */}

              {pages.map((page) => (
                <Link to={ page=== 'HOME' ?'/home':`/category/${page}`}> 
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                  }}
                  sx={{
                    height: "60px",
                    width: "700px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "rgb(25, 25, 25)",
                    "&:hover": {
                      backgroundColor: "rgb(25, 25, 25)",
                    },
                  }}
                >
                  <Typography
                    textAlign=""
                    sx={{
                      color: "rgb(255, 255, 255)",
                      fontFamily: "fr",
                      ":hover": {
                        textDecoration: "underline",
                        color: "rgb(216, 125, 74)",
                      },
                      padding: "0 !important",
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              height: "94px",
              alignItems: "center",
            }}
          >
            Audiophile
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              padding: "0 0 0 40px",
            }}
          >
            {pages.map((page) => (
                <Link to={ page=== 'HOME' ?'/home':`/category/${page}`}> 
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 4,
                  color: "rgb(255, 255, 255)",
                  display: "block",
                  fontFamily: "fr",
                  fontSize: "17px",
                  ":hover": {
                    textDecoration: "underline",
                    color: "rgb(216, 125, 74)",
                  },
                  fontWeight: "00",
                  letterSpacing: ".2rem",
                  padding: "0 0 0 15px",
                }}
              >
                {page}
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}             
          >
            <Tooltip  >
              <IconButton
                sx={{ p: 0, color: "rgb(255, 255, 255)" }}
              >
                
                <ThemeProvider theme={theme} >
                  {" "}
                  <Badge badgeContent={amountProduct} color="secondary"   sx={{ padding:'5px'}}  onClick={handleOpenUserMenu} >
                    {" "}
                    <LocalGroceryStoreOutlinedIcon onClick={()=>{
                      setStore((e)=>{
                        
                        return !store
                      })
                    }} />

                  </Badge>{" "}
                </ThemeProvider>
           
              </IconButton>

            </Tooltip>
            
          </Box>
          <Link to="/login">
          {
            !token &&        <Box 
                            sx={{
                              my: 4,
                              color: "rgb(255, 255, 255)",
                              display: "block",
                              fontFamily: "fr",
                              fontSize: "20px",
                              ":hover": {
                                textDecoration: "underline",
                                color: "rgb(216, 125, 74)",
                              },
                              fontWeight: "00",
                              letterSpacing: ".2rem",
                              padding: "0 0 0 15px",
                            }}  >Sing in</Box>
          }
  

                             </Link>
        </Toolbar>
      </Container>

    </AppBar>
    {store ? <Store className="my-element" open={store} setOpen={setStore} /> : ""}
    </>
  );
}
export default ResponsiveAppBar;
