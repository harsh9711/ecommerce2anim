import { createContext,useContext,useReducer,useEffect } from "react";
import reducer from "../reducer/cart_reducer";
const CartContext=createContext();
const getLocalCartData=()=>{
let localCartData=localStorage.getItem("HSCart");     
//     if(localCartData===[]) {
//         return []; 
//     }else {
//         return JSON.parse(localCartData);
//     }
const parsedData=JSON.parse(localCartData);
if(!Array.isArray(parsedData)) return [];
return parsedData;
};
const initialState={
     cart:getLocalCartData(),
    total_item:"",
    total_amount:"",
    shipping_fee:50000,
}
const CartProvider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);

    const addtoCart=(id,color,amount,product)=>{
        console.log({id,color,amount,product});
       dispatch ({type:"ADD_TO_CART",payload:{id,color,amount,product}})
    };

    ///set increase set decrease
    const setDecrease=(id)=>{
        dispatch({type:"SET_DECREMENT",payload:id});
    }
    const setIncrease=(id)=>{
        dispatch({type:"SET_INCREMENT",payload:id});
    }
    const removeItem=(id)=>{
        dispatch({type:"REMOVE_ITEM",payload:id});
    };

    const clearCart=(id)=>{
        dispatch({type:"CLEAR_CART",payload:id});
    }


    useEffect(()=>{
        // dispatch({type:"CART_TOTAL_ITEM"});
        // dispatch({type:"CART_TOTAL_PRICE"});
        dispatch({type:"CART_TOTAL_PRICE_TOTAL"});
        localStorage.setItem("thapaCart",JSON.stringify(state.cart));
    },[state.cart]);


return(
<CartContext.Provider value={{...state,addtoCart,removeItem,clearCart,setDecrease,setIncrease}}>
{children}
</CartContext.Provider>
);
};
const useCartContext=()=>{
    return useContext(CartContext);
}
export {CartProvider,useCartContext};