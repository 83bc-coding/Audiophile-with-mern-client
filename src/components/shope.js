import React from "react";
import HeadphonesI from "../image/image-category-thumbnail-headphones.webp";
import SpeakersI from "../image/image-category-thumbnail-speakers.webp";
import EarphonesI from "../image/c.webp";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
  export default function Shope() {



    const location = useLocation()
    if(location.pathname==="/login" ||location.pathname==="/register" || location.pathname ==="/checkout" ){
      return null;
    }














  return (
    <Box
      sx={{
        width: "100%  !important",
        margin: "auto",
        height: {md:"700px",sm:'900px',lg:'auto'},
        backgroundColor: "rgb(255, 255, 255)",
        marginTop:'100px'
      }}
    >
       <Box
        sx={{
          display: "flex",
          flexDirection:{sm:'column',md:'column',lg:'row'},
          width: "87%",
          margin: " auto ",
          height: {xl:"400px",md:'600px !important ',sm:'1200px'},
          justifyContent: "center",
          alignItems:'center',
          alignContent:'space-around',
        }}
      >
        
        <Box
          sx={{
            height: "350px",
            width: "250px  !important",
            backgroundColor: "#",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
           margin:'auto'
            
          }}
        >     

          <Box
            sx={{
              height: {md:"290px",sm:'290px',lg:'125px'},
              width:{md: "190px",sm:'190px',lg:'90px'},
              position: "relative",
              top: "80px",
              backgroundImage: `url(${HeadphonesI})`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
             }}
          >
          </Box>
          
          <Box
            sx={{
              height: "170px",
              width:{md: "900px",sm:'630px',lg:'400px'},
              backgroundColor: "rgb(241, 241, 241)",
              borderRadius: "15px",
            }}
          >

            <Box sx={{ position: "relative", bottom: "-89px" }}>HEADPHONES
            </Box>
            <Link to={`/category/HEADPHONES`} > 

            <Box sx={{}} className="shop">
              SHOP <div className="button-up"></div>
            </Box>
                      </Link>

          </Box>

        </Box>
        <Box
          sx={{
            height: "360px",
            width: "250px",
            backgroundColor: "#",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin:'auto'

           }}
        >
          <Box
            sx={{
              height: {md:"290px",sm:'290px',lg:'125px'},
              width:{md: "190px",sm:'190px',lg:'90px'},
              position: "relative",
              top: "80px",
              backgroundImage: `url(${SpeakersI})`,
             
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
             }}
          ></Box>
          <Box
            sx={{
              height: "170px",
              width:{md: "900px",sm:'630px',lg:'400px'},
              backgroundColor: "rgb(241, 241, 241)",
              borderRadius: "15px",
            }}
          >
                    <Link to={`/category/SPEAKERS`}> 

            <Box sx={{ position: "relative", bottom: "-89px" }}>SPEAKERS</Box>
            <Box sx={{}} className="shop">
              SHOP <div className="button-up"></div>
            </Box>
            </Link>

          </Box>
        </Box>
        <Box
          sx={{
            height: "350px",
            width: "250px",
            backgroundColor: "#",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
                       margin:'auto'

           }}
        >
          <Box
            sx={{
              height: {md:"290px",sm:'290px',lg:'125px'},
              width:{md: "190px",sm:'190px',lg:'90px'},
              backgroundImage: `url(${EarphonesI})`,
              position: "relative",
              top: "80px",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
             }}
          ></Box>
          <Box
            sx={{
              height: "170px",
              width:{md: "900px",sm:'630px',lg:'400px'},
              backgroundColor: "rgb(241, 241, 241)",
              borderRadius: "15px",
            }}
          >
                    <Link to={`/category/EARPHONES`}>

            <Box sx={{ position: "relative", bottom: "-89px" }}>EARPHONES</Box>
            <Box sx={{}} className="shop">
              SHOP <div className="button-up"></div>
            </Box>
            </Link>

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
