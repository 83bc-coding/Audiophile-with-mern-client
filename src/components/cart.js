import { Box, Typography } from '@mui/material'
 import ProductCart from '../productCart'
import { useDispatch, useSelector } from 'react-redux';
import {getTotalPrice, removeAllCart} from "./features/auth/authSlice"
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cart({nClose}) {
    const  cartItem  = useSelector((state) => state.cartItems);
    const  cartTotal  = useSelector((state) => state.cartTotal);

    const  amountProduct  = useSelector((state) => state.amountProduct);
    const dispatch = useDispatch()

   useEffect(()=>{
    dispatch(getTotalPrice())
   },[cartItem])
  return (
<Box
      sx={{
        height: "auto",
        minHeight: " 250px",
        width: "380px",
        backgroundColor: "white",
        position: "absolute",
        bottom: "",
        right:{md: "15px",sm:'150px'},
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
margin:'70px',
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
          cart  ({amountProduct})
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: "15px",
            margin: "auto 0",
            textDecorationLine: "underline",
            opacity: "1",
            cursor: "pointer",
          }}
          onClick={()=>{
            dispatch(removeAllCart())
          }}
        >
          Remove All
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
        sum={true}
      />
    );
  })
  
}







 














      
      <Box
        sx={{
          width: "90%",
          margin: "25px auto",
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
<Link to={"/checkout"}>  
      <Box
        sx={{
          width: "90%",
          height: "40px",
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
        onClick={nClose}
      >
        <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "500" }}>
          CHECKOUT
        </Typography>

      </Box>
      </Link>
       </>):(<Box sx={{ width:'90%',margin:' 20px auto',display:'flex',flexDirection:'column',alignItems:'center',}}> <Typography sx={{textAlign:'center'}}> Your cart is empty</Typography> 
       <RemoveShoppingCartIcon sx={{fontSize:"70px",marginTop:'20px'}}/>

 </Box>)}



    </Box>  )
}

export default Cart