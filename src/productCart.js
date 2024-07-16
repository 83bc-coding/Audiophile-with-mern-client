import React, { useEffect, useState } from 'react'
import AddIcon from "@mui/icons-material/Add";
import { Box } from '@mui/material';
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
 import { useDispatch } from 'react-redux';
import { addItem,removeCart } from "./components/features/auth/authSlice"

function ProductCart({image,amount,price,id,sum}) {
 
    const dispatch = useDispatch();
     const [total, setTotal] = useState(0);

  const increment = () => {
    dispatch(addItem({
        productId:id,
         amount:+1, 
          price:price,
         productImage:image,


       
      }))
  };
  const decrement = () => {
    if(amount===1){
        dispatch(removeCart({
            productId:id,

        }))

    }else{
          dispatch(addItem({
        productId:id,
         amount:-1, 
          price:price,
         productImage:image,


       
      })) 
    }

 
   };
  
 useEffect(()=>{
 
    const newTotal = (price) * amount;
    setTotal(newTotal);
 },[price,amount])
  return (


    <Box
    sx={{
      height: "150px",
      width: "90%",
      margin: " 0px auto 10px ",
      backgroundColor: "#fcfcfc",
 display:'flex',
 justifyContent:'space-between',
 alignItems:'center'
     }}
  >
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "95%",
        width: "25%",
        borderRadius:'0.8rem'
         }}
    />
    <Box>
      <Box sx={{height:'40px',width:'80px',color: "#000000", fontWeight: "600", cursor: "text",fontSize:'15px',textAlign:'left',   verticalAlign:'top'
}}>
     
         <Box> XX99 MIK l </Box>
         <Box sx={{color:'#00000080'}}> ${total.toLocaleString()} </Box>
       
      </Box>
     
    </Box>
    <Box
        sx={{
          backgroundColor: "#F1F1F1",
          height: "30px",
          width: "80px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          alignContent: "space-between",
          margin: "10px 0",
          color: "#101010",
        }}
      > 
 {sum? (<>       <AddIcon
          onClick={increment}
          sx={{ fontSize: "15px", margin: "auto", cursor: "pointer" }}
        />

        <Box
          sx={{
            fontSize: "15px",
            margin: "auto",
            fontWeight: "bold",
            fontFamily: "monospace",
          }}
        >
          {" "}
          {amount}
        </Box>
        <HorizontalRuleIcon
          onClick={decrement}
          sx={{ fontSize: "15px", margin: "auto", cursor: "pointer" }}
        /></>):(<>    <Box
          sx={{
             height: "30px",
            width: "80px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "space-between",
            margin: "10px 0",
            color: "rgba(0,0,0,0.5)",
            backgroundColor:'#fcfcfc'
          }}
        >     <Box
        sx={{
          fontSize: "15px",
          margin: "auto",
          fontWeight: "bold",
          fontFamily: "monospace",
        }}
      >
        {" "}
       x{amount}
      </Box>
          </Box> </>)}
      </Box>{" "}

  </Box>  )
}

export default ProductCart