import { Box, Typography } from "@mui/material";
import React from "react";
import anyProd from "../image/product-xx59-headphones/desktop/image-product.jpg";
import anyProd2 from "../image/product-xx59-headphones/tablet/image-product.jpg";
import anyProd3 from "../image/product-xx59-headphones/mobile/image-product.jpg";
import { Link } from "react-router-dom";
function LikeProduct({name,id,img}) {
  return (
    <Box
      sx={{
        height: {md:"100%",sm:'30%'},
        width: {md:"30%",sm:'100%'},
         display:'flex',
        flexDirection:'column',
        alignContent:'space-between',
        alignItems:'center',
        justifyContent:'space-between'
      }}
    >
      <Box
        sx={{
          backgroundImage:  `url(${img})`,
        
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height:{sm:'450px',md:'330px'},
          width:{md:'250px',sm:'100%',lg:'455px'},
          borderRadius:'0.8rem'
        }}
      />
              <Typography
            variant="h2"
            gutterBottom
            sx={{
              maxWidth: { md: "350px", sm: "480px" },
              fontSize: { sm: "40px", md: "33px" },
              fontFamily:'monospace',
              fontWeight: "bold",
               wordSpacing: "5px",
              color:"#010101"
            }}
          >
          {name}
          </Typography>

          <Link to={`/product/${id}`}> 
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
                  opacity: "0.7",
                },
              }}
            >

SEE PRODUCT            </Box>
</Link>


    </Box>
  );
}

export default LikeProduct;
