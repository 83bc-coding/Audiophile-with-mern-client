import { Box } from '@mui/material'
import React from 'react'
import manL from "../image/man.jpg";
import { useLocation } from 'react-router-dom';

function Men() {




    const location = useLocation()
    if(location.pathname==="/login" ||location.pathname==="/register" || location.pathname ==="/checkout"){
      return null;
    }















  return (
    <Box
    sx={{
      height: "600px",
      width: "80%",
       margin: { lg: "120px auto", sm: "450px auto" },
    }}
  >  
    <Box
    sx={{
      width: "100%",
      height: "640px",
       margin: "140px auto 0",
      display: "flex",
      flexDirection: { lg: "row", sm: "column-reverse", md: "row" },
      justifyContent: "space-around",
    }}
  >
    <Box
      sx={{
        height: "100%",
        width: { md: "49%", sm: "99%" },
        borderRadius: ".8rem",
        backgroundColor: "rgb(241, 241, 241)",
        display: "flex",
        flexDirection:'column',
        alignItems:'center',
        marginTop: { sm: "0px", md: "0" },
        position:'relative',
        top:{sm:'50px',md:'0'},
        justifyContent:'center',
        textAlign:'left',


      }}
    >
      <Box
        sx={{
          maxWidth: {md:"60%",sm:'70%'},
          fontFamily: "fr",
          fontSize: "35px",
          fontWeight: "700",
          textAlign:'left',
          alignItems:'left',
          position:'relative',
          left:{sm:'-10px',md:'-44px'}
         }}
      >
        BRINGING YOU THE{" "}
        <span
          style={{
            color: "#D87D4A",
          }}
        >
          {" "}
          BEST
        </span>{" "}
        AUDIO GEAR
      </Box>

      <Box     sx={{
          maxWidth: "72%",
          fontFamily: "",
          fontSize: "15px",
          fontWeight: "300",
          lineHeight:'1.5'
         }} >
        Located at the heart of New York City, Audiophile is the premier
        store for high end headphones, earphones, speakers, and audio
        accessories. We have a large showroom and luxury demonstration
        rooms available for you to browse and experience a wide range of
        our products. Stop by our store to meet some of the fantastic
        people who make Audiophile the best place to buy your portable
        audio equipment.
      </Box>
    </Box>

    <Box
      sx={{
        height: "100%",
        width: { md: "49%", sm: "99%" },
        backgroundImage: {
          lg: `url(${manL})`,
          sm: `url(${manL})`,
          md: `url(${manL})`,
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover",
        opacity: "1",
        borderRadius: ".8rem",
        marginBottom: { sm: "20px", md: "0" },
      }}
    ></Box>
  </Box>
  </Box>
    )
}

export default Men