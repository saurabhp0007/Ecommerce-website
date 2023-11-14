import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const defaultcart = () => {
  let cart = {}
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0 
    
  }
  return cart
}

export const ShopContextProvider = (props) => {

  const [cartItem , setcartItem ] = useState(defaultcart())
  
  const addToCart = (itemId)=>{
      setcartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
   }
   
  const removeToCart = (itemId)=>{
    setcartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
   }
  
  const totalcartamount = ()=>{
     let total = 0;
     for(const items in cartItem){
       if(cartItem[items] > 0){
        let itemInfo = all_product.find((product)=> product.id === Number(items))
        total += itemInfo.new_price * cartItem[items]
       }
       
     }
     return total;
     
  } 

  const totalcartitem = ()=>{
    let total = 0;
    for(const items in cartItem){
      if(cartItem[items] > 0){
       
       total +=  cartItem[items]
      }
      
    }
    return total;
  }
 
  const contextValue = {all_product,cartItem , addToCart ,removeToCart ,totalcartamount , totalcartitem};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
