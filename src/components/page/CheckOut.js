import React, { useState } from "react";

  import { Box, Button, TextField, Typography } from "@mui/material";
import { RadioButton, RadioGroup } from "react-radio-buttons";
import pay from "../pay/icon-cash-on-delivery.svg";
import Aummary from "./summary";
import Cart from "../cart";
import * as yup from "yup";
import { useFormik } from "formik";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector,useDispatch } from "react-redux";
import axios from "axios";
import { removeAllCart } from "../features/auth/authSlice";

import { useNavigate } from "react-router-dom";

let schema = yup.object().shape({
  email: yup.string()
    .email("Email should be valid")
    .required("Email is Required"),
  name: yup.string().required("Name is Required"),
  idUser: yup.string().required("Name is Required"),
  phone: yup.string().required("Phone is Required"),
  address: yup.string().required("Address is Required"),
  zipCode: yup.string().required("ZIP Code is Required"),
  country: yup.string().required("Country is Required"),
  city: yup.string().required("City is Required"),
  INCLUDED: yup.string().required("City is Required"),
  grandTotal: yup.string().required("Grand Total is Required"),
  products: yup.array().min(1, "At least one product is required"),

 });

function CheckOut() {

  const navigate = useNavigate();
const dispatch = useDispatch()

  const [payMethod, setPayMethod] = useState(true);
  function handlePay() {
    setPayMethod(!payMethod);
  }


  const  cartTotal  = useSelector((state) => state.cartTotal);
  const  SHIPPING  = useSelector((state) => state.shoipping);

   const  cartItem  = useSelector((state) => state.cartItems);
   const  user  = useSelector((state) => state.user);

  

  const formik = useFormik({
    initialValues: {
      email: "",
      name:"",
      country:"",
      city:"",
      zipCode:"",
      address:"",
      phone:"",
      products:cartItem,
      grandTotal:((cartTotal*0.05)+SHIPPING+cartTotal).toLocaleString() ,
      idUser:user.toString(),
      INCLUDED:(cartTotal*0.05).toLocaleString(),


  
  
      },
      validationSchema: schema,
      onSubmit: (values) => {
        axios.post("http://localhost:5000/api/order/neworder",values).then((res)=>{console.log(res,"reskvf")
          
           alert("success the orderv")
           dispatch(removeAllCart())
           navigate("/home")


        }).catch((err)=>{console.log(err,"error")})

    console.log(values)
   
      },
   
  });




   









function PayMethodCash({payMethod}){
  return(
  





    <Dialog
    open={payMethod}
    onClose={handlePay}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {"ERROR 525"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
    I'm sorry to hear that you've encountered difficulties in making your online payment for the massage booking. We strive to provide our customers with a smooth and secure payment experience, but it seems something did not go as planned in your case.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handlePay}  sx={{color:'#010101'}} >Disagree</Button>

      <Button onClick={handlePay} sx={{color:'#d87d4a'}} autoFocus>
        Agree
      </Button>
    </DialogActions>
  </Dialog>









  // <Box
  //   sx={{
  //     height: "240px",
  //     width: "80%",
  //     fontSize: "17px",
  //     fontWeight: "600",
  //     display: "flex",
  //      justifyContent: "space-between",
  //      alignContent: "space-between",
  //     flexDirection:{md:'row',sm:'column'},
  //     position:'relative',
  //     top:{sm:'-100px',md:'0'}
  //    }}
  // >
  // <Box>  </Box>
  //   <Box sx={{ width: { md: "380px", sm: "100%",display:'flex',flexDirection:'column' } }}>
  //   <label style={{textAlign:'left'}}>e-Money Number
  //   </label>
    
  //   <label style={{textAlign:'right'}}>ZIP Code</label>

  //     {" "}
  //     <input
  //       type="text"
  //       class="form__input"
  //       id="name"
  //       placeholder="5478954784"
  //       style={{
  //         marginLeft: "3px",
  //         padding: "1rem 2rem",
  //         color: "#000",
  //         fontSize: "1rem",
  //         borderRadius: "0.7rem",
  //         borderWidth: "1px",
  //         borderColor: "rgb(207 207 207)",
  //         fontWeight: "700",
  //         letterSpacing: "-0.025rem",
  //         outlineColor: "#d87d4a",
  //         outlineOffset: "1px",
  //         transitionDuration: "0.2s",
  //         lineHeight: "1.9rem",
  //         width: "100%",
  //       }}
  //     />{" "}
  //   </Box>
  //   <div></div>

  //   <Box sx={{ width: { md: "380px", sm: "100%",display:'flex',flexDirection:'column' } }}>
  //   <label style={{textAlign:'left'}}>e-Money PIN
  //   </label>
  //   <label style={{textAlign:'right'}}>ZIP Code</label>

  //     {" "}
  //     <input
  //       type="text"
  //       class="form__input"
  //       id="name"
  //       placeholder="6897"
  //       style={{
  //         marginLeft: "3px",
  //         padding: "1rem 2rem",
  //         color: "#000",
  //         fontSize: "1rem",
  //         borderRadius: "0.7rem",
  //         borderWidth: "1px",
  //         borderColor: "rgb(207 207 207)",
  //         fontWeight: "700",
  //         letterSpacing: "-0.025rem",
  //         outlineColor: "#d87d4a",
  //         outlineOffset: "1px",
  //         transitionDuration: "0.2s",
  //         lineHeight: "1.9rem",
  //         width: "100%",
  //       }}
  //     />{" "}
  //   </Box>
  // </Box>
  )
}






function PayMethodMoney(){
  return(<>        <Box
    sx={{
      height: "70px",
      width: "70px",
      backgroundImage: `url(${pay})`,

      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      margin: "auto 0",
    }}
  />
  <Typography sx={{width:'90%',textAlign:'left'}}>
    The ‘Cash on Delivery’ option enables you to pay in cash when our
    delivery courier arrives at your residence. Just make sure your
    address is correct so that your order will not be cancelled.
  </Typography></>)
}








  return (

    <Box sx={{display:'flex',
      flexDirection:{md:'row-reverse',sm:'column-reverse',
       
 
      }
    }}><Box sx={{margin:{md:'50px 100px 0 0',sm:''}}}>      <Aummary  />
 </Box>
    <Box
      sx={{
        height: "auto",
        minHeight: " 550px",
        width: {sm:"95%",md:'60%'},
        margin: " 70px auto",
        display: "flex",
        borderRadius: "0.8rem",
        flexDirection: "column",
        backgroundColor:'#FFFFFF'
      }}
    >
      <Box
        sx={{
          height: "50px",
          width: "90%",
          margin: "50px auto 0 ",
          textAlign: "left",
          fontSize: "40px",
          fontFamily: "monospace",
          color: "#010101",
        }}
        onClick={formik.handleSubmit}

      >
        CHECKOUT{" "}
      </Box>

      <Box
        sx={{
          height: "auto",
          minHeight: " 250px",
          width: "90%",
          margin: "50px auto ",
          textAlign: "left",
          fontSize: "40px",
          fontFamily: "monospace",
          color: "#0101e01",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            color: "rgb(216, 125, 74 )",
            marginBottom: "1.8rem",
            fontWeight: "700",
            lineHeight: "2.5rem",
            letterSpacing: ".1rem",
            width: "100%",
          }}
        >
          BILLING DETAILS
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            flexDirection: { sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              height: "240px",
              width: "130px",
              fontSize: "17px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
              alignContent: "space-between",
            }}
          >
            <label>Name</label>
            <label style={{textAlign:'left',fontSize:'10px',fontWeight:'lighter',color:'red'}}>       {formik.touched.email && formik.errors.email && (
  <div className="error">{formik.errors.email}</div>
)}    </label>

            <Box sx={{ width: { md: "400px", sm: "648px" } }}>
              
              {" "}
              <input
                   onChange={formik.handleChange("name")}
                    value={formik.values.name}
                    onBlur={formik.handleBlur("name")}

                type="text"
                class="form__input"
                id="name"
                placeholder="Alexei Ward"
                style={{
                  marginLeft: "3px",
                  padding: "1rem 2rem",
                  color: "#000",
                  fontSize: "1rem",
                  borderRadius: "0.7rem",
                  borderWidth: "1px",
                  borderColor: "rgb(207 207 207)",
                  fontWeight: "700",
                  letterSpacing: "-0.025rem",
                  outlineColor: "#d87d4a",
                  outlineOffset: "1px",
                  transitionDuration: "0.2s",
                  lineHeight: "1.9rem",
                  width: "100%",
                }}
              />{" "}
            </Box>
            <div></div>

            <label>Phone Number</label>
            <label style={{textAlign:'left',fontSize:'10px',fontWeight:'lighter',color:'red'}}>      {formik.touched.phone && formik.errors.phone}     </label>

            <Box sx={{ width: { md: "400px", sm: "648px" } }}>
              {" "}
              <input
                     onChange={formik.handleChange("phone")}
                     value={formik.values.phone}
                     onBlur={formik.handleBlur("phone")}

                type="phone"
                class="form__input"
                id="name"
                placeholder="+1 202-555-0136"
                style={{
                  marginLeft: "3px",
                  padding: "1rem 2rem",
                  color: "#000",
                  fontSize: "1rem",
                  borderRadius: "0.7rem",
                  borderWidth: "1px",
                  borderColor: "rgb(207 207 207)",
                  fontWeight: "700",
                  letterSpacing: "-0.025rem",
                  outlineColor: "#d87d4a",
                  outlineOffset: "1px",
                  transitionDuration: "0.2s",
                  lineHeight: "1.9rem",
                  width: "100%",
                }}
              />{" "}
            </Box>
          </Box>
          <Box
            sx={{
              height: "240px",
              width: "180px",
              fontSize: "17px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            <label>Email </label>
            <label style={{textAlign:'left',fontSize:'10px',fontWeight:'lighter',color:'red'}}>    {formik.touched.email && formik.errors.email}     </label>

            <Box sx={{ width: { md: "400px", sm: "648px" } }}>
              {" "}
              <input
       onChange={formik.handleChange("email")}
       value={formik.values.email}
       onBlur={formik.handleBlur("email")}

       type="mail"
       class="form__input"
                id="name"
                placeholder="alexei@mail.com "
                style={{
                  marginLeft: "3px",
                  padding: "1rem 2rem",
                  color: "#000",
                  fontSize: "1rem",
                  borderRadius: "0.7rem",
                  borderWidth: "1px",
                  borderColor: "rgb(207 207 207)",
                  fontWeight: "700",
                  letterSpacing: "-0.025rem",
                  outlineColor: "#d87d4a",
                  outlineOffset: "1px",
                  transitionDuration: "0.2s",
                  lineHeight: "1.9rem",
                  width: "100%",
                }}
              />{" "}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "auto",
          minHeight: " 250px",
          width: "90%",
          margin: "50px auto ",
          textAlign: "left",
          backgroundColor: "#FFFFF",
          fontSize: "40px",
          fontFamily: "monospace",
          color: "#0101e01",
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            color: "rgb(216, 125, 74 )",
            marginBottom: "1.8rem",
            fontWeight: "700",
            lineHeight: "2.5rem",
            letterSpacing: ".1rem",
            width: "100%",
          }}
        >
          SHIPPING INFO
        </Typography>

        <Box
          sx={{
            height: "240px",
            width: "100%",
            fontSize: "17px",
            fontWeight: "600",
            marginTop: "20px",
          }}
        >
          <label> Address</label>
          <label style={{textAlign:'left',fontSize:'10px',fontWeight:'lighter',color:'red'}}>      {formik.touched.address && formik.errors.address}     </label>

          <Box sx={{ width: "100%" }}>
            {" "}
            <input
 onChange={formik.handleChange("address")}
 value={formik.values.address}
 onBlur={formik.handleBlur("address")}

              type="text"
              class="form__input"
              id="name"
              placeholder="alexei@mail.com "
              style={{
                marginLeft: "3px",
                padding: "1rem 2rem",
                color: "#000",
                fontSize: "1rem",
                borderRadius: "0.7rem",
                borderWidth: "1px",
                borderColor: "rgb(207 207 207)",
                fontWeight: "700",
                letterSpacing: "-0.025rem",
                outlineColor: "#d87d4a",
                outlineOffset: "1px",
                transitionDuration: "0.2s",
                lineHeight: "1.9rem",
                width: "100%",
              }}
            />{" "}
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexDirection: { sm: "column", md: "row" },
            position: "relative",
            top: "-110px",
          }}
        >
          <Box
            sx={{
              height: "240px",
              width: "100%",
              fontSize: "17px",
              fontWeight: "600",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
              alignContent: "space-between",
            }}
          >
            <label>ZIP Code</label>
            <label style={{textAlign:'left',fontSize:'10px',fontWeight:'lighter',color:'red'}}>      {formik.touched.zipCode && formik.errors.zipCode}     </label>

            <Box sx={{ width: { md: "400px", sm: "100%" } }}>
              {" "}
              <input
               onChange={formik.handleChange("zipCode")}
               value={formik.values.zipCode}
               onBlur={formik.handleBlur("zipCode")}

                type="number"
                class="form__input"
                id="name"
                placeholder="Alexei Ward"
                style={{
                  marginLeft: "3px",
                  padding: "1rem 2rem",
                  color: "#000",
                  fontSize: "1rem",
                  borderRadius: "0.7rem",
                  borderWidth: "1px",
                  borderColor: "rgb(207 207 207)",
                  fontWeight: "700",
                  letterSpacing: "-0.025rem",
                  outlineColor: "#d87d4a",
                  outlineOffset: "1px",
                  transitionDuration: "0.2s",
                  lineHeight: "1.9rem",
                  width: "100%",
                }}
              />{" "}
            </Box>
            <div></div>

            <label>Country</label>
            <label style={{textAlign:'left',fontSize:'10px',fontWeight:'lighter',color:'red'}}>      {formik.touched.country && formik.errors.country}     </label>

            <Box sx={{ width: { md: "400px", sm: "100%" } }}>
              {" "}
              <input
                   onChange={formik.handleChange("country")}
                   value={formik.values.country}
                   onBlur={formik.handleBlur("country")}

                type="text"
                class="form__input"
                id="name"
                placeholder="United States"
                style={{
                  marginLeft: "3px",
                  padding: "1rem 2rem",
                  color: "#000",
                  fontSize: "1rem",
                  borderRadius: "0.7rem",
                  borderWidth: "1px",
                  borderColor: "rgb(207 207 207)",
                  fontWeight: "700",
                  letterSpacing: "-0.025rem",
                  outlineColor: "#d87d4a",
                  outlineOffset: "1px",
                  transitionDuration: "0.2s",
                  lineHeight: "1.9rem",
                  width: "100%",
                }}
              />{" "}
            </Box>
          </Box>
          <Box
            sx={{
              height: "240px",
              width: "100%",
              fontSize: "17px",
              fontWeight: "600",
              marginTop: "20px",
            }}
          >
            <label>City</label>
            <label style={{textAlign:'left',fontSize:'10px',fontWeight:'lighter',color:'red'}}>      {formik.touched.city && formik.errors.city}     </label>

            <Box sx={{ width: { md: "400px", sm: "100%" } }}>
              {" "}
              <input
                   onChange={formik.handleChange("city")}
                   value={formik.values.city}
                   onBlur={formik.handleBlur("city")}

                type="text"
                class="form__input"
                id="name"
                placeholder="New Yourk "
                style={{
                  marginLeft: "3px",
                  padding: "1rem 2rem",
                  color: "#000",
                  fontSize: "1rem",
                  borderRadius: "0.7rem",
                  borderWidth: "1px",
                  borderColor: "rgb(207 207 207)",
                  fontWeight: "700",
                  letterSpacing: "-0.025rem",
                  outlineColor: "#d87d4a",
                  outlineOffset: "1px",
                  transitionDuration: "0.2s",
                  lineHeight: "1.9rem",
                  width: "100%",
                }}
              />{" "}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "auto",
          minHeight: " 250px",
          width: "90%",
          margin: "0px auto ",
          textAlign: "left",
          backgroundColor: "#FFFFF",
          fontSize: "40px",
          fontFamily: "monospace",
          color: "#0101e01",
          position: "relative",
          top: { md: "-80px", sm: "-200px" },
        }}
      >
        <Typography
          sx={{
            textAlign: "left",
            color: "rgb(216, 125, 74 )",
            marginBottom: "1.8rem",
            fontWeight: "700",
            lineHeight: "2.5rem",
            letterSpacing: ".1rem",
            width: "100%",
          }}
        >
          SHIPPING INFO
        </Typography>

        <Box
          sx={{
            height: { md: "150px", sm: "170px" },
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { sm: "column" },
          }}
        >
          <Typography sx={{ fontSize: "17px", fontWeight: "600" }}>
            Payment Method
          </Typography>
          <Box
            sx={{
              height: "98%",
              width: { md: "50%", sm: "100%" },
              margin: "auto 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "self-end",
            }}
          >
            <Box
              onClick={handlePay}
              sx={{
                width: "100%",
                height: "48%",
                display: "flex",
                alignItems: "center",
                justifyContent: "stretch",
                cursor: "pointer",
                borderRadius: "0.8rem",
                border: `1px solid ${
                  payMethod ? "rgb(207 207 207)" : "#d87d4a"
                }`,
                ":hover": {
                  borderColor: "#d87d4a",
                },
              }}
            >
              <button
                type="button"
                name="payMethod"
                value="e-money"
                style={{
                  margin: "auto 4%",
                  height: "20px",
                  width: "20px",
                  backgroundColor: `${!payMethod ? "#d87d4a" : "white"}`,
                  borderRadius: "50%",
                  border: "3px solid  ",
                  borderColor: "rgb(207 207 207)",
                }}
              />
              <Typography sx={{ margin: "auto 0%" }}> e-Money</Typography>
            </Box>

            <Box
              onClick={handlePay}
              sx={{
                width: "100%",
                height: "48%",
                display: "flex",
                alignItems: "center",
                justifyContent: "stretch",
                cursor: "pointer",
                borderRadius: "0.8rem",
                border: `1px solid ${
                  !payMethod ? "rgb(207 207 207)" : "#d87d4a"
                }`,
                ":hover": {
                  borderColor: "#d87d4a",
                },
              }}
            >
              <button
                type="button"
                name="payMethod"
                value="Cash on delivery"
                style={{
                  margin: "auto 4%",
                  height: "20px",
                  width: "20px",
                  backgroundColor: `${payMethod ? "#d87d4a" : "white"}`,
                  borderRadius: "50%",
                  border: "3px solid  ",
                  borderColor: "rgb(207 207 207)",
                }}
              />
              <Typography sx={{ margin: "auto 0%" }}>
                {" "}
                Cash on delivery
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          height: "120px",
          width: "90%",
          margin: "auto",
           position: "relative",
          top: "-50px",
          display:`${payMethod ? "flex" : " "}`,
          justifyContent:'space-around',
          alignContent:'center',alignItems:'center',
       
        }}
      >









{!payMethod?<PayMethodCash payMethod  /> :<PayMethodMoney/> }




 



      </Box>

    </Box>
    </Box>
  );
}

export default CheckOut;
