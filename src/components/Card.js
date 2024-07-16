import { Box, Typography } from "@mui/material";
import React from "react";
import imgSpeaker from "../image/home/mobile/image-speaker-zx9.png";
import imgSpeakerT from "../image/home/tablet/image-speaker-zx9.png";
import imgSpeakerD from "../image/home/desktop/image-speaker-zx9.png";
import PATTERd from "../image/home/desktop/pattern-circles.svg";


import imgSpeaker1 from "../image/home/desktop/image-speaker-zx7.jpg";
import imgSpeakerM from "../image/home/mobile/image-speaker-zx7.jpg";
import imgSpeakerS from "../image/home/tablet/image-speaker-zx7.jpg";
import headM from "../image/home/tablet/image-earphones-yx1.jpg";
import headS from "../image/home/mobile/image-earphones-yx1.jpg";
import headL from "../image/home/desktop/image-earphones-yx1.jpg";
import { Link, useLocation } from "react-router-dom";

function Card() {
  const location = useLocation()
  if(location.pathname.match(/^\/product\/[^/]+$/) || location.pathname.match(/^\/category\/[^/]+$/) || location.pathname==="/login"||location.pathname === "/register" || location.pathname ==="/checkout"){
    return null;
  }
  return (
    <div>
      <Box
        sx={{
          height: "1200px",
          width: "80%",
           margin: { lg: "120px auto", sm: "450px auto" },
        }}
      >
        <Box
          sx={{
            height: { md: " 300px", lg: "400px", sm: "750px" },
            width: "99%",
            margin: " auto",
            backgroundColor: "rgb(216 125 74/1)",
            borderRadius: ".8rem",
            display: "flex",
            flexDirection: { lg: "row", sm: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: "60px",
            overflow: "hidden",
backgroundImage:`URL(${PATTERd})`,
backgroundPosition:{md:'center top -12rem',sm:'center top -1rem',lg:'left -14.8rem top -3.6rem'},
backgroundSize:{lg:'auto',md:'',sm:'29.1rem'},
backgroundRepeat:'no-repeat'



          }}
        >
          <Box sx={{
            position:'relative',
            top:'22px',
            width:{md:'300px',sm:'170px'},
            height:{md:'370px',sm:'200px'},       backgroundImage: {
              lg: `url(${imgSpeakerD})`,
              sm: `url(${imgSpeaker})`,
              md: `url(${imgSpeakerT})`,
            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            backgroundSize: "cover",
            opacity:'1'
          }}>
            {" "}
            {/* <img
              src={imgSpeaker}
              style={{
                height: "300px",
                width: "350px",
              }}
            />{" "} */}
          </Box>

          <Box
            sx={{
              width: "280px",
              margin: "",
              height: "400px",
              display: "flex",
              flexDirection: "column",
              alignItems: { sm: "center", md: "center", lg: "start" },
              textAlign: { lg: "left", md: "left", sm: "center" },
              color: "rgb(255, 255, 255)",
              position:'relative',
              top:'20px'
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                maxWidth: { md: "400px", sm: "390px", lg: "400px" },
                fontSize: { sm: "50px", md: "58px" },
                fontFamily: "fr",
                fontWeight: "bold",
                margin: "10px 0",
              }}
            >
              ZX9 SPEAKER
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{
                fontFamily: "fr",
                fontWeight: "700",
                maxWidth: { md: "390px", sm: "350px" },
                margin: "10px 0",
              }}
            >
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </Typography>
            <Link to={`/product/5`}>

            <Box
              sx={{
                cursor: "pointer",
                height: "48px",
                width: "160px",
                backgroundColor: "#000000",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "600",
                fontFamily: "",
                margin: "10px 0",
                ":hover": {
                  opacity: "0.8",
                },
                fontSize: "13px",
              }}
            >
              SEE PRODUCT
            </Box>

            </Link>
          </Box>
        </Box>

        <Box
          sx={{
            height: "400px",
            width: "99%",
            margin: "45px auto ",
            backgroundColor: "#F1F1F1",
            borderRadius: ".8rem",
            display: "flex",
            flexDirection: { lg: "row", sm: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",

            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              margin: "0",
              backgroundColor: "red",
              padding: "0",
              backgroundImage: {
                lg: `url(${imgSpeaker1})`,
                sm: `url(${imgSpeakerM})`,
                md: `url(${imgSpeakerS})`,
              },
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                margin: {
                  lg: " 160px 80px 0",
                  md: "120px 40px 0",
                  sm: "120px 30px 0",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignContent: "end",
                width: "200px",
              }}
            >
              {" "}
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  maxWidth: "180px",
                  fontSize: "25px",
                  fontFamily: "",
                  fontWeight: "bold",
                  margin: "10px 0",
                  lineHeight: "1.9",
                  wordSpacing: "5px",
                }}
              >
                ZX7 SPEAKER
              </Typography>
              <Link to={`/product/6`}>

              <Box
                sx={{
                  cursor: "pointer",
                  height: "48px",
                  width: "160px",
                  backgroundColor: "#F1F1F1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  fontFamily: "",
                  margin: "10px 0",
                  color: "#000000",
                  border: "1px solid",
                  ":hover": {
                    color: "#F1F1F1",
                    backgroundColor: "#000000",
                  },
                  fontSize: "13px",
                }}
              >
                SEE PRODUCT
              </Box>{" "}
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: "400px",
            width: "100%",
            margin: "-25px auto ",
            borderRadius: ".8rem",
            display: "flex",
            flexDirection: { lg: "row", sm: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",

            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "340px",
              width: { md: "49%", sm: "99%" },
              backgroundImage: {
                lg: `url(${headL})`,
                sm: `url(${headM})`,
                md: `url(${headS})`,
              },
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "cover",
              opacity: "1",
              borderRadius: ".8rem",
              marginBottom: { sm: "15px", md: "0" },
            }}
          ></Box>

          <Box
            sx={{
              height: "340px",
              width: { md: "49%", sm: "99%" },
              borderRadius: ".8rem",
              backgroundColor: "rgb(241, 241, 241)",
            }}
          >
            <Box
              sx={{
                textAlign: "left",
                margin: {
                  lg: " 160px 70px 0",
                  md: "120px 30px 0",
                  sm: "20px 30px 0",
                },
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignContent: "end",
                width: "250px",
              }}
            >
              {" "}
              <Typography
                variant="h2"
                gutterBottom
                sx={{
                  maxWidth: "220px",
                  fontSize: "25px",
                  fontFamily: "",
                  fontWeight: "bold",
                  margin: "10px 0",
                  lineHeight: "1.9",
                  wordSpacing: "1px",
                }}
              >
                YX1 EARPHONES
              </Typography>
              <Link to={`/product/7`}>

              <Box
                sx={{
                  cursor: "pointer",
                  height: "48px",
                  width: "160px",
                  backgroundColor: "#F1F1F1",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: "600",
                  fontFamily: "",
                  margin: "10px 0",
                  color: "#000000",
                  border: "1px solid",
                  ":hover": {
                    color: "#F1F1F1",
                    backgroundColor: "#000000",
                  },
                  fontSize: "13px",
                }}
              >
                SEE PRODUCT
              </Box>{" "}
              </Link>
            </Box>
          </Box>
        </Box>

        {/* <Box sx={{
            height: "400px",
            width: "99%",
            margin: "150px auto ",
             borderRadius: ".8rem",
            display: "flex",
            flexDirection: { lg: "row", sm: "column", md: "row" },
            justifyContent: "space-around",
            alignItems: "center",

            overflow: "hidden",
            backgroundColor:'blue'
          }}>

</Box> */}
      
      </Box>
    </div>
  );
}

export default Card;
