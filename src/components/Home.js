import { Box, Container, Typography } from "@mui/material";
import React from "react";
import homeImageD from "../image/home/desktop/image-hero.jpg";
import homeImageT from "../image/home/tablet/image-hero.jpg";
import homeImageM from "../image/home/mobile/image-hero.jpg";
 
import "./compo.css";
import { Link, useLocation } from "react-router-dom";
function Home() {
  const location = useLocation()
 
    return (
      <Box
        sx={{
          width: "100%",
          margin: "auto",
          height: "700px",
          display: "flex",
          alignItems: "end",
          backgroundImage: {
            xl: `url(${homeImageD})`,
            sm: `url(${homeImageT})`,
            xs: `url(${homeImageM})`,
          },
  
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          maxWidth="xl"
          sx={{
            width: "79%",
            margin: "auto",
            height: "400px",
             display: "flex",
            flexDirection: "column",
            alignItems:{sm:'center',md:'start'},
            textAlign: {md:"left",sm:'center'},
            color:'rgb(255, 255, 255)',
           
          }}
        >
          <Typography variant="h5" gutterBottom sx={{opacity:'0.6'}}>
            NEW PRODUCT
          </Typography>
          <Typography variant="h2" gutterBottom sx={{ maxWidth: {md:"390px",sm:'350px' },fontSize:{sm:'50px',md:'58px'},  fontFamily:'fr',fontWeight:'bold', margin:'10px 0'}}>
            XX99 MARK II HEADPHONES{" "}
          </Typography>
          <Typography variant="body1" gutterBottom sx={{  fontFamily:'fr',fontWeight:'700',maxWidth: {md:"390px",sm:'350px' }, margin:'10px 0'}} >
            Experience natural, lifelike audio and exceptional build quality made
            for the passionate music enthusiast.
          </Typography>
          <Link to={`/product/2`}>

          <Box sx={{cursor:"pointer", height:'50px',width:'150px',backgroundColor:'rgb(216, 125, 74)',display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',fontFamily:'', margin:'10px 0', ":hover": {
   backgroundColor:'transparent',
   border:'1px solid rgb(216, 125, 74)'
                    },}}>
  SEE PRODUCT
          </Box>
          </Link>
        </Box>
      </Box>
    );
  

}

export default Home;
