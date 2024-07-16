import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
 import axios from "axios";
import { setLogin } from "../features/auth/authSlice";


let schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should be valid")
    .required("Email is Required"),
  password: yup.string().required("Password is Required"),
  name: yup.string().required("name is Required"),
   mobile: yup.string().required("name is Required"),
});

function Register() {


  const dispatch = useDispatch();
  const navigate = useNavigate();


 
function  loginTransction(v){
axios.post("http://localhost:5000/api/user/register",v).then((res)=>{
  const {refreshToken,_id} = res.data

  dispatch(setLogin({
    user: _id,
    token: refreshToken,
  }))
  navigate("/home");

 
}).catch((erroe)=>{
  console.log(erroe,"im error in api call register")
})
}


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      mobile: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      loginTransction(values)
 // console.log(values)
 
    },
  });
 

 



  





  return (
    <Box>
      <Box
        sx={{
          height: "auto",
          minHeight: " 600px",
          width: { sm: "95%", md: "60%" },
          margin: " 70px auto",
          display: "flex",
          borderRadius: "0.8rem",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            height: "50px",
            width: "95%",
            margin: "50px auto 0 ",
            textAlign: "left",
            fontSize: "40px",
            fontFamily: "monospace",
            color: "#010101",
          }}
        >
          Register{" "}
        </Box>

        <Box sx={{ width: "90%", height: "650px", margin: "auto" }}>
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
              margin: "auto",
            }}
          >
            <Box sx={{ width: { md: "90%", sm: "90%" }, margin: "20px auto" }}>
              {" "}
              <label>Name</label>{" "}
              <input
                type="text"
                class="form__input"
                id="name"
                placeholder="Alexei Ward"
                name="name"
                onChange={formik.handleChange("name")}
                onBlur={formik.handleBlur("name")}
                value={formik.values.name}
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
              <Box sx={{color:'red',fontSize:'13px',textAlign:'right'}}>              {formik.touched.name && formik.errors.name}
              </Box>
            </Box>
            <div> </div>

            <Box sx={{ width: { md: "90%", sm: "90%" }, margin: "20px auto" }}>
              {" "}
              <label>Phone Number</label>{" "}
              <input
                onChange={formik.handleChange("mobile")}
                onBlur={formik.handleBlur("mobile")}
                value={formik.values.mobile}
                type="mobile"
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
                  margin: "auto",
                }}
              />{" "}
              <Box sx={{color:'red',fontSize:'13px',textAlign:'right'}}>             {formik.touched.mobile && formik.errors.mobile}
              </Box>
            </Box>

            <Box></Box>

            <Box sx={{ width: { md: "90%", sm: "90%" }, margin: "20px auto" }}>
              {" "}
              <label>Email</label>{" "}
              <input
                onChange={formik.handleChange("email")}
                onBlur={formik.handleBlur("email")}
                value={formik.values.email}
                type="mail"
                class="form__input"
                id="name"
                placeholder="audo@mail.com"
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
                  margin: "auto",
                }}
              />{" "}
<Box sx={{color:'red',fontSize:'13px',textAlign:'right'}}>              {formik.touched.email && formik.errors.email}
</Box>
            </Box>
            <Box sx={{ width: { md: "90%", sm: "90%" }, margin: "20px auto" }}>
              {" "}
              <label>Password</label>{" "}
              <input
                onChange={formik.handleChange("password")}
                onBlur={formik.handleBlur("password")}
                value={formik.values.password}
                type="password"
                class="form__input"
                id="name"
                placeholder="As%$i***74U*"
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
              <Box sx={{color:'red',fontSize:'13px',textAlign:'right'}}>              {formik.touched.password && formik.errors.password}
              </Box>
            </Box>
          </Box>
        </Box>
         <Box
          sx={{
            width: "40%",
            height: "60px",
            backgroundColor: "rgb(216, 125, 74)",
            margin: "0px auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ":hover": {
              opacity: "0.7",
            },
            cursor: "pointer",
            position:'relative',
            zIndex:'9999'
          }}
          type='submit'
          onClick={formik.handleSubmit}
        >
          <Typography variant="h6" sx={{ fontSize: "15px", fontWeight: "500" }}>
            Register
          </Typography>
        </Box>
       </Box>
    </Box>
  );
}

export default Register;
