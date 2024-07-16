import { Box, Typography } from "@mui/material";
import React from "react";
 
import { Link } from "react-router-dom";
function Product({prod}) {

   return (
    <>
      {" "}
      <Box
        sx={{
          height: "35.5%",
          width: { md: "80%", lg: "93%" },
           margin: "80px auto",
          display: "flex",
          justifyContent: { lg: "space-around", sm: "space-between",md:'space-around' },
          alignItems: "center",
          flexDirection: { sm: "column", md: "row" },
          paddingTop: "50px",
          backgroundColor:'#FFFFFF',
        

         }}
      >
        <Box
          sx={{
            height: { sm: "400px", md: "490px", lg: "490px" },
            width: { md: "490px", sm: "93%",lg:'490px' },
            backgroundColor: "#F1F1F1",
            borderRadius: "0.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin:'auto'

          }}
        >
          <Box
            sx={{
              backgroundImage: 
              `url(${prod.imageProduct})`,
           
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: { md: "400px", sm: "400px" },
              transition: "  0.2s ease-in-out",
              width: { sm: "460px", md: "370px" },
              borderRadius: "0.8rem",

              position: "relative",

              ":hover": {
                height: { sm: "400px", md: "440px" },
                width: { md: "370px", sm: "460px" },
              },
            }}
          ></Box>
        </Box>
        <Box
        
          sx={{
            width: "640px",
            height: "560px",
            display: "flex",
            flexDirection: "column",
            alignItems: { sm: "center", md: "start" },
            textAlign: { md: "left", sm: "center" },
            color: "rgb(255, 255, 255)",
            justifyContent: "center",
marginLeft:{md:'100px' }         }}
        >
          <Typography variant="h7" gutterBottom sx={{ opacity: "1",color:'rgb(216, 125, 74)',fontFamily:"serif",wordSpacing:'5px',letterSpacing:'15px' }}>
            NEW PRODUCT
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              maxWidth: { md: "350px", sm: "480px" },
              fontSize: { sm: "35px", md: "45px" },
              fontFamily:'monospace',
              fontWeight: "bold",
              margin: "10px 0",
              wordSpacing: "5px",
              color:"#010101"
            }}
          >
          {prod.name}
          <Typography>

          </Typography>
          {prod.category}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontFamily:'monospace',
              fontWeight: "700",
              maxWidth: { md: "490px", sm: "650px" },
              margin: "10px 0",
              color:'#B9B7B7'
            }}
          >
{prod.description}
          </Typography>
<Link to={`/product/${prod.id}`}>
          <Box
            sx={{
              cursor: "pointer",
              height: "50px",
              width: "150px",
              backgroundColor: "rgb(216, 125, 74)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontFamily: "",
              margin: "10px 0",
              ":hover": {
         opacity:'0.7'
              },
            }}
          >
            SEE PRODUCT
          </Box>
          </Link>
        </Box>
      </Box>{" "}
    </>
  );
}

export default Product;
