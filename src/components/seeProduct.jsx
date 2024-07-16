import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import imageH from "../image/category-headphones/desktop/image-xx99-mark-two.jpg";
import imageHm from "../image/category-headphones/tablet/image-xx99-mark-two.jpg";
import imageHs from "../image/category-headphones/mobile/image-xx99-mark-two.jpg";
import menD from "../image/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import menD2 from "../image/product-xx99-mark-two-headphones/tablet/image-gallery-2.jpg";
import menD3 from "../image/product-xx99-mark-two-headphones/mobile/image-gallery-3.jpg";
 import AddIcon from "@mui/icons-material/Add";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import LikeProduct from "./likeProduct";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUser,setOrder,addItem,getTotalPrice } from "./features/auth/authSlice";

function SeeProduct() {
const {id}= useParams()

 const  cartItem  = useSelector((state) => state.cartItems);
 const  token  = useSelector((state) => state.token);

const user = useSelector((state) => state.user);

const navigate = useNavigate()

  const [count, setCount] = useState(1);
  const [data,setData]= useState({})
  const [like,setLike]= useState([])
  const [imageG,setImageG]= useState({one:"",two:"",three:""})

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count !== 1) {
      setCount(count - 1);
    } else return;
  };
const dispatch = useDispatch();
 
  // const l =  ()=>{
  //   return  dispatch(getUser())
  // }


 const handleForUser =()=>{
  if(token){
    console.log("im item",cartItem)

dispatch(addItem({
  productId:data.id,
  productImage:data.imageProduct,
  amount:count,
  price:data.price

}))

  }else{
    navigate("/login")
  }


 

// if(!l){
//   navigate('/login')
//   console.log("im l",l)

// }else{
//   navigate('/category')

// }
 }








useEffect(()=>{
 console.log("im l"
 )
},[count])






useEffect(()=>{

 

    const fetchData = async () => {
      try {
        const res = await axios.get(  `http://localhost:5000/api/product/${id}`);
        const newData = await res.data[0]
        console.log(newData);
        setData(newData);
        if (Array.isArray(newData.imageGallery) && newData.imageGallery.length > 0) {
          setImageG({...imageG,one:newData.imageGallery[0],two:newData.imageGallery[1],three:newData.imageGallery[2]});
        } else {
          setImageG("");
        }
      } catch (err) {
        console.log(err);
      }
    };
    const fetchDataL = async () => {
      try {
        const ress = await axios.get(  `http://localhost:5000/api/product/like/3`);
        const newDataL = await ress.data
        console.log(newDataL);
        setLike(newDataL);
        
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchData();
    fetchDataL();
     

 },[id])

 console.log("im data",like)


 





  return (
    <>
      {" "}
      <Box
        sx={{
          height: { md: "900px", sm: "1200px" },
          width: { md: "90%", lg: "80%" },
          margin: "auto",
          display: "flex",
          justifyContent: {
            lg: "space-around",
            sm: "space-between",
            md: "space-around",
          },
          alignItems: "center",
          flexDirection: { sm: "column", md: "row" },
          paddingTop: "50px",
         }}
      >
        <Box
          sx={{
            height: { sm: "790px", md: "500px", lg: "490px" },
            width: { md: "490px", sm: "93%", lg: "490px" },
            backgroundColor: "#F1F1F1",
            borderRadius: "0.8rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${data.imageProduct})`,

              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: { md: "450px", sm: "400px" },
              transition: "  0.2s ease-in-out",
              width: { sm: "460px", md: "370px" },
              borderRadius: "0.8rem",

              position: "relative",

              ":hover": {
                height: { sm: "470px", md: "490px" },
                width: { md: "370px", sm: "500px" },
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
            marginLeft: { md: "100px" },
          }}
        >
          <Typography
            variant="h7"
            gutterBottom
            sx={{
              opacity: "1",
              color: "rgb(216, 125, 74)",
              fontFamily: "serif",
              wordSpacing: "5px",
              letterSpacing: "15px",
            }}
          >
             NEW PRODUCT
          </Typography>
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              maxWidth: { md: "350px", sm: "480px" },
              fontSize: { sm: "35px", md: "45px" },
              fontFamily: "monospace",
              fontWeight: "bold",
              margin: "10px 0",
              wordSpacing: "5px",
              color: "#010101",
            }}
          >
        </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{
              fontFamily: "monospace",
              fontWeight: "700",
              maxWidth: { md: "490px", sm: "650px" },
              margin: "10px 0",
              color: "#B9B7B7",
            }}
          >
{data.description}
          </Typography>
          <Box
            sx={{
              fontFamily: "monospace",
              fontWeight: "bold",
              wordSpacing: "5px",
              color: "#010101",
              fontSize: "20px",
              margin: " 24px 0",
            }}
          >
            $ {data.price}
          </Box>
          <Box
            sx={{
              width: "280px",
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row-reverse",
            }}
          >
            {" "}
            <Box
            onClick={handleForUser}
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
              ADD TO CART{" "}
            </Box>

            <Box
              sx={{
                backgroundColor: "#F1F1F1",
                height: "50px",
                width: "110px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                alignContent: "space-between",
                margin: "10px 0",
                color: "#101010",
              }}
            >
              <AddIcon
                onClick={increment}
                sx={{ fontSize: "15px", margin: "auto", cursor: "pointer" }}
              />

              <Box
                sx={{
                  fontSize: "20px",
                  margin: "auto",
                  fontWeight: "bold",
                  fontFamily: "monospace",
                }}
              >
                {" "}
                {count}
              </Box>
              <HorizontalRuleIcon
                onClick={decrement}
                sx={{ fontSize: "15px", margin: "auto", cursor: "pointer" }}
              />
            </Box>{" "}
          </Box>
        </Box>
      </Box>{" "}
      <Box
        sx={{
          height: { md: "600px", sm: "600px", lg: "430px" },
          width: { md: "90%", lg: "80%", sm: "89%" },
          margin: "auto",
          borderRadius: "0.8rem",
          display: "flex",
          flexDirection: { md: "column", lg: "row",sm:'column' },
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: { lg: "73%", md: "100%" },
            textAlign: "left",
            marginTop: { md: "50px", sm: "50px" },
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: "45px",
              fontFamily: "monospace",
              margin: "10px 0",
              wordSpacing: "5px",
              color: "#010101",
            }}
          >
            FEATURES{" "}
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ maxWidth: { lg: "610px", md: "100%" }, marginTop: "20px" }}
          >
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ maxWidth: { lg: "610px", md: "100%" }, marginTop: "30px" }}
          >
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </Typography>
        </Box>
        <Box
          sx={{
            height: "600px",
            width: { lg: "27%", md: "100%" },
            textAlign: "left",
            marginTop: { md: "50px", sm: "50px" },
          }}
        >
          <Typography
            variant="h2"
            gutterBottom
            sx={{
              fontSize: "40px",
              fontFamily: "monospace",
              margin: "10px 0",
              color: "#010101",
              maxWidth: "100%",
            }}
          >
            IN THE BOX
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontFamily: "monospace" }}
          >
            <span
              style={{
                marginRight: "20px",
                color: "rgb(216, 125, 74)",
              }}
            >
              {" "}
              1x{" "}
            </span>{" "}
            Headphone unit
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontFamily: "monospace" }}
          >
            <span
              style={{
                marginRight: "20px",
                color: "rgb(216, 125, 74)",
              }}
            >
              {" "}
              2x{" "}
            </span>
            Replacement earcups
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontFamily: "monospace" }}
          >
            <span
              style={{
                marginRight: "20px",
                color: "rgb(216, 125, 74)",
              }}
            >
              {" "}
              1x{" "}
            </span>
            User manual
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontFamily: "monospace" }}
          >
            <span
              style={{
                marginRight: "20px",
                color: "rgb(216, 125, 74)",
              }}
            >
              {" "}
              1x{" "}
            </span>{" "}
            3.5mm 5m audio cable
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontFamily: "monospace" }}
          >
            <span
              style={{
                marginRight: "20px",
                color: "rgb(216, 125, 74)",
              }}
            >
              {" "}
              1x{" "}
            </span>{" "}
            Travel bag
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: { md: "580px", sm: "830px", lg: "580px" },
          width: { md: "90%", lg: "80%", sm: "89%" },
           margin: "auto",
          borderRadius: "0.8rem",
          marginTop: "70px",
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          justifyContent: { md: "space-between" },
          alignContent: { sm: "space-around" },
        }}
      >
        <Box
          sx={{
            height: { md: "100%", sm: "90%" },
            width: { sm: "100%", md: "49%" },
          }}
        >
          {" "}
          <Box
            sx={{
              backgroundImage: `url(${imageG.one})`,
             
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: { md: "100%", sm: "93%" },
              width: "100%",
              borderRadius: "0.8rem",
            }}
          ></Box>{" "}
        </Box>

        <Box
          sx={{
            height: { md: "100%", sm: "100%" },
            width: { sm: "100%", md: "49%" },
             borderRadius: "0.8rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              backgroundImage: `url(${imageG.two})`,

              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "47%",
              width: "100%",
              borderRadius: "0.8rem",
            }}
          ></Box>
          <Box
            sx={{
              backgroundImage: `url(${imageG.three})`,

              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: "47%",
              width: "100%",
              borderRadius: "0.8rem",
            }}
          >
            {" "}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          height: "80px",
          width: "90%",
          margin: "auto",
          marginTop: "160px",
        }}
      >
        <Typography
          variant="h2"
          gutterBottom
          sx={{
            maxWidth: "100%",
            fontSize: { sm: "35px", md: "45px" },
            fontFamily: "monospace",
            fontWeight: "bold",
            margin: "10px 0",
            wordSpacing: "5px",
            color: "#010101",
          }}
        >
          YOU MAY ALSO LIKE
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
          margin: "auto  ",
          height: {md:"500px",sm:'1900px'},
           display: "flex",
          flexDirection: { sm: "column",md:'row' },
          justifyContent: "space-between",
          alignItems:{sm:'center'}
        }}
      >
        {like.map((l)=>(
          <LikeProduct name={l.name} id={l.id} img={l.imageProduct} />
        ))}
        {/* <LikeProduct />
        <LikeProduct />
        <LikeProduct /> */}
      </Box>
    </>
  );
}

export default SeeProduct;
