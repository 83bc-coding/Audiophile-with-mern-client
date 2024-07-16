 import React, { useEffect } from "react";
 import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "../features/auth/authSlice";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ProductCart from "../../productCart";

function Aummary({subimt}) {
  const  cartItem  = useSelector((state) => state.cartItems);
  const  cartTotal  = useSelector((state) => state.cartTotal);
  const  SHIPPING  = useSelector((state) => state.shoipping);

  const  amountProduct  = useSelector((state) => state.amountProduct);
  const dispatch = useDispatch()

 useEffect(()=>{
  dispatch(getTotalPrice())
 },[cartItem])














  return (
 <>
<Box
      sx={{
        height: "auto",
        minHeight: " 650px",
        width: "90%",
        backgroundColor: "white",
         bottom: "",
         cursor: "default",
        top: "80px",
        maxHeight: "500px",
        padding: " 30px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "0.8rem",
        opacity:'1',
        zIndex:'9999999999999',
        transform:'none',
margin:{sm:'30px',md:'80px'},
       }}
       onClick={()=>{
 
       }}
    >
     {amountProduct !==0 ? ( <>
         <Box
        sx={{
          width: "90%",
          margin: "0 auto 20px",
          display: "flex",
          justifyContent: "space-between",
          color: "#000000",
        }}
      >
        <Typography variant="h5" sx={{ cursor: "text" }}>
        SUMMARY
        </Typography>
 
      </Box>







  {
  
  cartItem.map((i) => {
    const price = i.price ? parseFloat(i.price.replace(',', '')) : 0;
    return (
      <ProductCart
        key={i.productId}
        id={i.productId}
        image={i.productImage}
        price={price}
        amount={i.amount}
        sum={false}
      />
    );
  })
  
}







 














      
      <Box
        sx={{
          width: "90%",
          margin: "25px auto 10px",
          display: "flex",
          justifyContent: "space-between",
          color: "#000000",
          cursor: "text",
        }}
      >
        <Typography variant="h6">TOTAL</Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "20px",
            margin: "auto 0",
            opacity: "1",
            cursor: "text",
          }}
        >
          $ {cartTotal.toLocaleString()}
        </Typography>
      </Box>












      
      <Box
        sx={{
          width: "90%",
          margin: "5px auto",
          display: "flex",
          justifyContent: "space-between",
          color: "#000000",
          cursor: "text",
        }}
      >
        <Typography variant="h6">SHIPPING</Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "20px",
            margin: "auto 0",
            opacity: "1",
            cursor: "text",
          }}
        >
          $ {SHIPPING.toLocaleString()}
        </Typography>
      </Box>

      <Box
        sx={{
          width: "90%",
          margin: "5px auto",
          display: "flex",
          justifyContent: "space-between",
          color: "#000000",
          cursor: "text",
        }}
      >
        <Typography variant="h6">VAT (INCLUDED)
</Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "20px",
            margin: "auto 0",
            opacity: "1",
            cursor: "text",
          }}
        >
          $ {(cartTotal*0.05).toLocaleString() }
        </Typography>
      </Box>

      <Box
        sx={{
          width: "90%",
          margin: "5px auto",
          display: "flex",
          justifyContent: "space-between",
          color: "rgb(216, 125, 74)",
          cursor: "text",
        }}
      >
        <Typography variant="h6">GRAND TOTAL
</Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: "20px",
            margin: "auto 0",
            opacity: "1",
            cursor: "text",
          }}
        >
          $ {((cartTotal*0.05)+SHIPPING+cartTotal).toLocaleString() }
        </Typography>
      </Box>















      <Box
        sx={{
          width: "90%",
          height: "60px",
          backgroundColor: "rgb(216, 125, 74)",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ":hover": {
            opacity: "0.7",
          },
          cursor: "pointer",
        }}
        onClick={subimt}
      >
        <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "500" }}>
          CONTINUE & PAY
        </Typography>

      </Box>
      
       </>):(<Box sx={{ width:'90%',margin:' 20px auto',display:'flex',flexDirection:'column',alignItems:'center',}}> <Typography sx={{textAlign:'center'}}> Your cart is empty</Typography> 
       <RemoveShoppingCartIcon sx={{fontSize:"70px",marginTop:'20px'}}/>

 </Box>)}



    </Box>  </> 
  );
}

export default Aummary;
