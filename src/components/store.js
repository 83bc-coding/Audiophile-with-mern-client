 import {
  Modal,
   ModalContent,
   ModalOverlay,
 
} from '@chakra-ui/react'
 
import Cart from "./cart";
import { useEffect } from "react";
import { getTotalPrice } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
function Store({open,setOpen}) {
 
  

   




const dispatch =useDispatch()






  useEffect(()=>{
    dispatch(getTotalPrice())

})





 
 const x=()=>{
  setOpen(!open)

 }
 

  return (
    <Modal 

  preserveScrollBarGap={false}

    isOpen={open} onClose={ x}>
            <ModalOverlay px="1.5rem"        backdropFilter='blur(10px) hue-rotate(90deg)'
     onClick={x}

 />

        <ModalContent          
         mt={{ base: '7rem', sm: '8rem' }}
        mx={{ base: '1.5rem' }}
        width='100%'

        >  
  
   <Cart nClose={ x}/>
     </ModalContent>
    </Modal>
 
);
}

export default Store;
