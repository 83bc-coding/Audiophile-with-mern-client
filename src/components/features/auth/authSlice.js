import { createSlice } from "@reduxjs/toolkit";
 const initialState = {
   user: null,
  token: null,
  cartItems: [],
  cartTotal: 0,
  cartId: ''  ,
  amountProduct:0,
  shoipping:50,
  
  };

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  
    removOrder: (state, action) => {
      // Check if the payload contains an order
     state.cartItems = [];
     
    },
     getUser: (state) => {
     console.log( "im user stata",state.user)
    },
     addItem(state, action) {
// state.cartItems=[]
// state.amountProduct=0

      const existingProductIndex = state.cartItems.findIndex(
        (item) => item.productId === action.payload.productId
      );

      if (existingProductIndex !== -1) {
        // If the product exists, update the quantity
        const updatedCartItems = [...state.cartItems];
        
        updatedCartItems[existingProductIndex] = {
          ...updatedCartItems[existingProductIndex],
          amount: updatedCartItems[existingProductIndex].amount + action.payload.amount,
        };    return {
          ...state,
          cartItems: updatedCartItems,
        };  }else{
          return {
            ...state,
            cartItems: [...state.cartItems, action.payload],

            amountProduct: state.amountProduct + 1, // Increment the amountProduct

 
          };

        }
 
      
   
    },removeCart(state, action) {
        const existingProductIndex = state.cartItems.findIndex(
          (item) => item.productId === action.payload.productId
        );
      
        if (existingProductIndex !== -1) {
          // If the product exists, remove it from the cart
          const updatedCartItems = [...state.cartItems];
          updatedCartItems.splice(existingProductIndex, 1);
          return {
            ...state,
            cartItems: updatedCartItems,
            amountProduct: state.amountProduct - 1, // Decrement the amountProduct
          };
        } else {
          // If the product doesn't exist in the cart, return the original state
          return state;
        }
      },removeAllCart(state){
        return {
          ...state,
          cartItems: [],
          amountProduct: 0,
        };
      },getTotalPrice(state) {
        state.cartTotal = state.cartItems.reduce((acc, curr) => {
          const price = curr.price ? Number(curr.price.replace(',', '')) : 0;
          return acc + (isNaN(price) ? 0 : price * curr.amount);
        }, 0);
      }
}
});

export const {  setLogin, setLogout, setOrder,getUser,addItem,getTotalPrice,removeCart,removeAllCart,removOrder } =
  authSlice.actions;
export default authSlice.reducer;