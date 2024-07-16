import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Product from "./product";
import SeeProduct from "./seeProduct";
import { useParams ,Link } from "react-router-dom";
import axios from "axios";
function Category(){

const [data,setData]= useState([])
    const {name}= useParams()
    useEffect(()=>{
      axios.get(`http://localhost:5000/api/product/category/${name}`).then((res)=>{
        console.log(res)
        setData(res.data)
      }).catch((rror)=>{
        console.log("the error of axiox",rror)
      })
    console.log('im data',data)
    },[name])



    return(
        
<Box sx={{
height:"auto",
    width:'100%',
    paddingBottom:'0px',
    minHeight:"300px",
  
}} >
    
    <Box sx={{
        height:'220px',
        width:'100%',
        backgroundColor:'rgb(25, 25, 25)',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontFamily:'',
        color:'#F1F1F1',    margin:'90px auto  ',



    }}>
        <Typography variant="h3" >
            {name}
        </Typography>
    </Box>
 
    {/* <Product/>
   <Product/>
   <Product/> */}
   {data.map((product)=>(
    <Product prod={product}/>
   ))}
  

{/* <SeeProduct/> */}

</Box>
    )
}
export default Category